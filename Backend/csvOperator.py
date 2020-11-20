import json
import csv

class CSVOperator:

    def add_block(self, block):

        """
        method to add a block to the blockchain
        """

        with open("storage/blockchain.csv", 'a+', newline='') as blockchain:
            fieldnames = ['_id', 'car_id', 'nonce', 'car_hash', 'block_hash', 'details']
            writer = csv.DictWriter(blockchain, fieldnames=fieldnames)
            writer.writerow(block)


    def add_address(self, address):

        """
        method to add an address 
        """

        with open("storage/adresses.csv", 'a+', newline='') as adresses:
            csv_writer = csv.writer(adresses)
            csv_writer.writerow("adress")
            
    def get_entries(self, _ids):

        """
        method to get all entries on the blockchain with a correspondinh car_id
        """
        
        
        with open("storage/blockchain.csv") as blockchain:

            csv_reader = csv.DictReader(blockchain)
            return [dict(row) for row in csv_reader if dict(row)["_id"] in _ids]
        

    def read_chain(self):

        """
        generator to go through blockchain and return consecutive blocks
        """

        with open("storage/blockchain.csv") as blockchain1:

            with open("storage/blockchain.csv") as blockchain2:

                previous_blocks = csv.DictReader(blockchain1)
                current_blocks = csv.DictReader(blockchain2)
                next(current_blocks)

                for previous_block, current_block in zip(previous_blocks, current_blocks):
                    yield dict(previous_block), dict(current_block)

    def get_last_block(self):

        """
        get the last entry on the blockchain
        """

        with open("storage/blockchain.csv") as blockchain:

            reader = csv.DictReader(blockchain)
        
            for _ in range(1,self.get_chain_length()):

                next(reader)

            return dict([row for row in reader][0])
        

    def read_adresses(self):

        """
        generator to yield adresses, row for row
        """

        with open("storage/adresses.csv") as addresses:

            csv_reader = csv.reader(addresses)
            for row in csv_reader:

                yield row


    def get_chain_length(self):

        with open("storage/blockchain.csv") as blockchain:

            csv_reader = csv.DictReader(blockchain)
            return sum(1 for row in csv_reader)
        




