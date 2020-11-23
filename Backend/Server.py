import socket
import threading
from CSVOperator import CSVOperator
from requests import get
from getmac import get_mac_address as gma
from datetime import datetime
import pytz


LONDON_TIME = pytz.timezone('Europe/London')






"""
every time the server starts again 

"""



class Server:

    def __init__(self):

        self.csv_operator = CSVOperator()

    

    def get_public_ip(self):

        """
        method to find puplic IPv4 address 
        """

        ip = get('https://api.ipify.org').text
        return ip


    def get_mac_address(self):

        """
        method to retrieve the mac address of the computer
        """
        return gma()

    def check_server_details(self):

        """
        method to check:

        1. If the server already has a uuid. 
        If not it will create one

        2. If the current saved public ip address matches the detected one.
        If not it will overwrite the server details and invoke a broadcast 
        of the change to the network. 
        """
        pass

    def clock_time(self):

        """
        as long as the server is running it will save a time stamp every 15 minutes
        ( current and previous). This enables the server to find out how long it has 
        been online if shut off. If necessary it can then ask other nodes to get an 
        update of what happened during the time it was offline.

        The servers sync on London time. 
        
        """
        datetime.now(LONDON_TIME)


        pass

    
        

            
