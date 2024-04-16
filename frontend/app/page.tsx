'use client';

import Layout from "@/components/Layout";
import Paint from "@/components/Paint";
import NotConnected from "@/components/NotConnected";
import { useAccount } from "wagmi";

export default function Home() {

  const { address, isConnected } = useAccount();

  return (
    <div>
      <Layout>
        {isConnected ? (
          <Paint />
        ) : (
          <NotConnected />
        )}
      </Layout>
    </div>
  );
}
