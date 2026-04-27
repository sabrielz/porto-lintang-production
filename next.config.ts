import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  // withPayload handles the webpack/turbopack config for esbuild native bindings
};

export default withPayload(nextConfig);
