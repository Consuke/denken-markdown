import { defineConfig } from 'vitest/config';

export default defineConfig({
  // 全問題を読み込むテストがあり、CIの少ないコアでは既定の5秒を超えることがある。
  test: { include: ['tests/unit/**/*.test.ts'], testTimeout: 20_000 },
});
