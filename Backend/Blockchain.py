import hashlib
import json
from DBConnect import DBConnect
from CSVOperator import CSVOperator

class Blockchain:
    
    def __init__(self):

        self.csv_operator = CSVOperator()
        
    def get_hash(self, block):
        
        encoded_block = json.dumps(block, sort_keys = True).encode()
        return hashlib.sha256(encoded_block).hexdigest()

    def proof_of_work(self, previous_nonce):
        new_nonce = 1
        check_nonce = True
        while check_nonce:
            hash_operation = hashlib.sha256(str(new_nonce**2 - previous_nonce**2).encode()).hexdigest()
            if hash_operation[:4] == '0000':
                check_nonce = False
            else:
                new_nonce += 1
        return new_nonce
    
    def chain_is_valid(self):

        for previous_block, current_block in self.csv_operator.read_chain():
            
            if self.get_hash(previous_block) != current_block["block_hash"]:
                
                return False
            
            hash_operation = hashlib.sha256(str(int(current_block["nonce"])**2 - int(previous_block["nonce"])**2).encode()).hexdigest()
            if hash_operation[:4] != '0000':

                return False
           
        return True
    
                        
    def mine_block(self, block_type, block_data):

        """
        requires block_type to be string
        block_data has to be provided inside a list
        """
        
        client = DBConnect()
        
        last_block = self.csv_operator.get_last_block()
        _id = self.csv_operator.get_chain_length()
        car_id = block_data[0]
        nonce = self.proof_of_work(int(last_block["nonce"]))
        last_hash_block = self.get_hash(last_block)
        last_hash_car = "None"
        
        if block_type == "Production":
            
            block = {"_id":_id,
                     "car_id":car_id,
                     "nonce":nonce,
                     "car_hash":last_hash_car,
                     "block_hash":last_hash_block,
                     "details": "Production "  
            }
            
        elif block_type == "NewRegister":
            
            block = {"_id":_id,
                     "car_id":car_id,
                     "nonce":nonce,
                     "car_hash":last_hash_car,
                     "block_hash":last_hash_block,
                     "details": "NewRegister "  
            }
                                 
        elif block_type == "Repair":
            
            last_car_entry = client.get_car_history(car_id)[-1]
            last_hash_car = self.get_hash(last_car_entry)            
            
            block = {"_id":_id,
                     "car_id":car_id,
                     "nonce":nonce,
                     "car_hash":last_hash_car,
                     "block_hash":last_hash_block,
                     "details": "Repair"  
            }
         
        elif block_type == "Sale":
            
            last_car_entry = client.get_car_history(car_id)[-1]
            last_hash_car = self.get_hash(last_car_entry)    
            
            block = {"_id":_id,
                     "car_id":car_id,
                     "nonce":nonce,
                     "car_hash":last_hash_car,
                     "block_hash":last_hash_block,
                     "details": "Sale ! dvsvflsks! sdfbsvkg! "  
            }                                             
        else:
        
            return "wrong input"
        
        client.ingest_block(block)
        self.csv_operator.add_block(block)
        
          
    def car_history_is_valid(self,car_id):
        
        """
        car history is valid if
        1. chain is valid
        2. entries in data base match corresponding chain entries
        3. the hashes that link the car history are valid
        """
  
        if self.chain_is_valid():
        
            client = DBConnect()
            car_history = client.get_car_history(car_id)
                
            car_history_ids = [str(stage["_id"]) for stage in car_history]
            print(car_history_ids)
            print(car_history)
            print(self.csv_operator.get_entries(car_history_ids))
            
            # find entries in blockchain that have matching _id to car_history_ids
            
            if car_history != self.csv_operator.get_entries(car_history_ids):
           
                return False
            
            if len(car_history) <= 1:
                
                return True
            
            index = 1
            
            while index < len(car_history):
                
                if self.get_hash(car_history[index -1]) != car_history[index]["car_hash"]:
               
                    return False
                
                index += 1
                
            return True
                
        else:

            return False


        