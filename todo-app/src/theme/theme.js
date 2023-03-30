import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: { //グローバルに適用したいテーマを設定
      body: {
        backgroundColor: 'orange.50',
        color: 'gray.800',
      },
      p: {    // md (768px) を境界にしてモバイル表示とPC表示を切り替える
              // 画面幅が 768px 以上になるとフォントサイズは md(16px) から lg(18px) へ切り替え
        fontSize: { base: 'md', md: 'lg' },
        lineHeight: 'tall'
      }
    }
  }
});

export default theme;