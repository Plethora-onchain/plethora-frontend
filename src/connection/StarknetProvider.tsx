"use client";

import { sepolia, mainnet, Chain } from "@starknet-react/chains";
import {
  StarknetConfig,
  argent,
  braavos,
  useInjectedConnectors,
  alchemyProvider,
  jsonRpcProvider
} from "@starknet-react/core";

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [argent(), braavos()],
    // Hide recommended connectors if the user has any connector installed.
    includeRecommended: "onlyIfNoConnectors",
    // Sort connectors alphabetically by their id.
    order: "alphabetical",
  });
  const chains = [sepolia];

  function rpc(chain: Chain) {
    return {
      nodeUrl: process.env.NEXT_PUBLIC_RPC_PROVIDER
    }
  }
  const provider = jsonRpcProvider({ rpc });

  return (
    // React context that provides access to
    // starknet-react hooks and shared state
    <StarknetConfig
      chains={chains}
      provider={provider}
      connectors={connectors}
      // autoConnect={false}
    >
      {children}
    </StarknetConfig>
  );
}
