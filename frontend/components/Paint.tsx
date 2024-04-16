'use client';

//ReactJS
import { useState, useEffect } from "react";

//ChakraUI
import { Flex, Text, Button, Spinner, useToast, Alert, AlertIcon, Box, Spacer } from "@chakra-ui/react";

//Wagmi
import { useAccount, useReadContract, type BaseError, useWriteContract, useWaitForTransactionReceipt, useWatchContractEvent } from "wagmi";

//Contract informations
import { contractAddress, contractAbi } from "@/constants";

//Viem
import { formatEther } from "viem";

//Css
import '../app/global.css';

//Color palette
import  ColorPalette  from "./ColorPalette"


const Paint = () => {

    const [currentColor, setCurrentColor] = useState<number | null>(null);
    const { address } = useAccount();
    const toast = useToast();

    const getColor = (value: any) => {
            if (typeof value !== 'number') {
              return undefined;
            }
            switch (value) {
              case 0:
                return 'white';
              case 1:
                return 'blue';
              case 2:
                return 'red';
              case 3:
                return 'green';
              default:
                return undefined;
            }

        }

        //--------------------Contracts---------------------


        //Get Table  return []
        const {data: table, isLoading: tableLoading, refetch: refetchTable } = useReadContract({
          address: contractAddress,
          abi : contractAbi,
          functionName : 'getTable',
        })


        //Change color (index, color)
        const { data: hash, error: paintError, isPending, writeContract } = useWriteContract() 
        const changeColor = async(k: number) => {
            writeContract({
            address: contractAddress,
            abi: contractAbi,
            functionName: 'changeColor',
            account: address,
            args: [currentColor, k]
            })};
        const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ 
            hash, 
        })

        interface ColorChangedEvent {
          index: number;
          color: number;
          changeBy: string;
        }

        const watchEventResult = useWatchContractEvent({
          address: contractAddress,
          abi: contractAbi,
          eventName: 'ColorChanged',
        });
        
        // Vérification si la valeur retournée est de type 'void'
        if (watchEventResult !== void 0) {
          // Si ce n'est pas 'void', cela signifie que des données ont été retournées
          const eventData = (watchEventResult as any).data;
          console.log(eventData);
        } else {
          // Sinon, la fonction useWatchContractEvent n'a pas retourné de données
          // Gérer le cas où aucune donnée n'a été retournée
          console.log("aaaaaaa");
        }




        useEffect(() => {
          if (isConfirmed) {
          // Réinitialiser la couleur actuellement sélectionnée après que la transaction est confirmée
              setCurrentColor(null);
                refetchTable();
              }
            }, [isConfirmed]); // surveiller uniquement le changement de isConfirmed


          //Create table
          const values = table ? table.toString().split(',').map(value => parseInt(value)) : [];
          const rows = 100; 
          const cols = 100;
          const tableCells = [];
          for (let i = 0; i < rows; i++) {
            const rowCells = [];
            for (let j = 0; j < cols; j++) {
              const k = i * cols + j;
              rowCells.push(<td style={{ backgroundColor: getColor(values?.[k]) }} key={k} onClick={() => handleClick(i,j)}></td>);          
            }
            tableCells.push(<tr key={i}>{rowCells}</tr>);
          }

          // click call changeColor
          const handleClick = (i: number, j: number) => {
            const k = i * cols + j;
            changeColor(k);
          };

          // Change color
          const handleColorChange = (color: number | null) => {
            setCurrentColor(color);
          };

            



  return (
      <Flex 
        alignItems="center"    
        >
            <table>
                <tbody>
                    {tableCells}
                </tbody>
            </table>
        <ColorPalette 
            onColorChange={handleColorChange}
        ></ColorPalette>
        <Text>{currentColor}</Text>
      </Flex>
  );
}

export default Paint
