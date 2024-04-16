'use client';

import { ChakraProvider } from "@chakra-ui/react";

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  sepolia,
  hardhat,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const WALLET_CONNECT = process.env.NEXT_PUBLIC_WALLET_CONNECT || "";


const config = getDefaultConfig({
  appName: 'paint',
  projectId: WALLET_CONNECT,
  chains: [sepolia, hardhat],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <ChakraProvider>
              {children}
            </ ChakraProvider>
          </ RainbowKitProvider>
        </ QueryClientProvider>
      </ WagmiProvider>
      </body>
    </html>
  );
}
