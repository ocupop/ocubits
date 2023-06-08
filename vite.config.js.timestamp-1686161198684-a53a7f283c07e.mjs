// vite.config.js
import { defineConfig } from "file:///Users/paulstroot/Documents/Work/ocupop/ocubits/ocubits/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import react from "file:///Users/paulstroot/Documents/Work/ocupop/ocubits/ocubits/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///Users/paulstroot/Documents/Work/ocupop/ocubits/ocubits/node_modules/vite-plugin-dts/dist/index.mjs";
import { visualizer } from "file:///Users/paulstroot/Documents/Work/ocupop/ocubits/ocubits/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var __vite_injected_original_dirname = "/Users/paulstroot/Documents/Work/ocupop/ocubits/ocubits";
var visualizerOptions = {
  template: "treemap",
  // or sunburst
  open: false,
  gzipSize: true,
  brotliSize: true,
  filename: "analice.html"
};
var vite_config_default = defineConfig({
  plugins: [dts(), react(), visualizer(visualizerOptions)],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.js"),
      name: "ocubits",
      fileName: (format) => `ocubits.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      // input: {
      //   main: 'src/index.js',
      //   TextInput: 'src/TextInput.js'
      // },
      output: {
        // inlineDynamicImports: false,
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  },
  // build: {
  //   rollupOptions: {
  //     external: ['react', 'react-dom'],
  //     input: {
  //       index: 'src/index.js'
  //     },
  //     output: {
  //       inlineDynamicImports: true,
  //       globals: {
  //         react: 'React',
  //         'react-dom': 'ReactDOM'
  //       }
  //     }
  //   }
  // },
  // build: {
  //   outDir: 'dist',
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, 'src/index.js')
  //     },
  //     output: {
  //       entryFileNames: 'assets/[name].[hash].js',
  //       chunkFileNames: 'assets/[name].[hash].js',
  //       assetFileNames: 'assets/[name].[hash].[ext]'
  //     }
  //   }
  // },
  // build: {
  //   lib: {
  //     entry: resolve(__dirname, 'src/index.js'),
  //     name: 'ocubits',
  //     formats: ['es'],
  //     fileName: 'ocubits'
  //   },
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, 'src/index.js'),
  //       TextInput: resolve(__dirname, 'src/components/TextInput/TextInput.jsx')
  //       // third: resolve(__dirname, 'src/third.js')
  //     }
  //   }
  // },
  // build: {
  //   outDir: 'dist',
  //   rollupOptions: {
  //     input: {
  //       ocubits: resolve(__dirname, 'src/index.js'),
  //       TextInput: resolve(__dirname, 'src/components/TextInput/TextInput.jsx')
  //     }
  //   }
  // }
  // build: {
  //   lib: {
  //     entry: resolve(__dirname, 'src/index.js'),
  //     name: 'ocubits',
  //     formats: ['umd', 'es'],
  //     fileName: 'ocubits'
  //   },
  //   rollupOptions: {
  //     external: ['react', 'react-dom'],
  //     output: {
  //       manualChunks: {
  //         TextInput: ['./src/components/TextInput/TextInput.js'],
  //         SelectInput: ['./src/components/SelectInput/SelectInput.js']
  //       }
  //     }
  //   }
  // },
  resolve: {
    alias: {
      "@components": resolve(__vite_injected_original_dirname, "src/components"),
      "@lib": resolve(__vite_injected_original_dirname, "src/lib")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcGF1bHN0cm9vdC9Eb2N1bWVudHMvV29yay9vY3Vwb3Avb2N1Yml0cy9vY3ViaXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvcGF1bHN0cm9vdC9Eb2N1bWVudHMvV29yay9vY3Vwb3Avb2N1Yml0cy9vY3ViaXRzL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9wYXVsc3Ryb290L0RvY3VtZW50cy9Xb3JrL29jdXBvcC9vY3ViaXRzL29jdWJpdHMvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInXG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzc1NzQ2NzY3L2lzLXRoZXJlLWFueS1idW5kbGUtYW5hbHl6ZXItZm9yLXZpdGVcbi8vIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplclxuY29uc3QgdmlzdWFsaXplck9wdGlvbnMgPSB7XG4gIHRlbXBsYXRlOiAndHJlZW1hcCcsIC8vIG9yIHN1bmJ1cnN0XG4gIG9wZW46IGZhbHNlLFxuICBnemlwU2l6ZTogdHJ1ZSxcbiAgYnJvdGxpU2l6ZTogdHJ1ZSxcbiAgZmlsZW5hbWU6ICdhbmFsaWNlLmh0bWwnXG59XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbZHRzKCksIHJlYWN0KCksIHZpc3VhbGl6ZXIodmlzdWFsaXplck9wdGlvbnMpXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC5qcycpLFxuICAgICAgbmFtZTogJ29jdWJpdHMnLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBvY3ViaXRzLiR7Zm9ybWF0fS5qc2BcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxuICAgICAgLy8gaW5wdXQ6IHtcbiAgICAgIC8vICAgbWFpbjogJ3NyYy9pbmRleC5qcycsXG4gICAgICAvLyAgIFRleHRJbnB1dDogJ3NyYy9UZXh0SW5wdXQuanMnXG4gICAgICAvLyB9LFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIGlubGluZUR5bmFtaWNJbXBvcnRzOiBmYWxzZSxcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICAgICdyZWFjdC1kb20nOiAnUmVhY3RET00nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLy8gYnVpbGQ6IHtcbiAgLy8gICByb2xsdXBPcHRpb25zOiB7XG4gIC8vICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgLy8gICAgIGlucHV0OiB7XG4gIC8vICAgICAgIGluZGV4OiAnc3JjL2luZGV4LmpzJ1xuICAvLyAgICAgfSxcbiAgLy8gICAgIG91dHB1dDoge1xuICAvLyAgICAgICBpbmxpbmVEeW5hbWljSW1wb3J0czogdHJ1ZSxcbiAgLy8gICAgICAgZ2xvYmFsczoge1xuICAvLyAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAvLyAgICAgICAgICdyZWFjdC1kb20nOiAnUmVhY3RET00nXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH0sXG5cbiAgLy8gYnVpbGQ6IHtcbiAgLy8gICBvdXREaXI6ICdkaXN0JyxcbiAgLy8gICByb2xsdXBPcHRpb25zOiB7XG4gIC8vICAgICBpbnB1dDoge1xuICAvLyAgICAgICBtYWluOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC5qcycpXG4gIC8vICAgICB9LFxuICAvLyAgICAgb3V0cHV0OiB7XG4gIC8vICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS5baGFzaF0uanMnLFxuICAvLyAgICAgICBjaHVua0ZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV0uW2hhc2hdLmpzJyxcbiAgLy8gICAgICAgYXNzZXRGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdLltoYXNoXS5bZXh0XSdcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH0sXG5cbiAgLy8gYnVpbGQ6IHtcbiAgLy8gICBsaWI6IHtcbiAgLy8gICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC5qcycpLFxuICAvLyAgICAgbmFtZTogJ29jdWJpdHMnLFxuICAvLyAgICAgZm9ybWF0czogWydlcyddLFxuICAvLyAgICAgZmlsZU5hbWU6ICdvY3ViaXRzJ1xuICAvLyAgIH0sXG4gIC8vICAgcm9sbHVwT3B0aW9uczoge1xuICAvLyAgICAgaW5wdXQ6IHtcbiAgLy8gICAgICAgbWFpbjogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXguanMnKSxcbiAgLy8gICAgICAgVGV4dElucHV0OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb25lbnRzL1RleHRJbnB1dC9UZXh0SW5wdXQuanN4JylcbiAgLy8gICAgICAgLy8gdGhpcmQ6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3RoaXJkLmpzJylcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH0sXG5cbiAgLy8gYnVpbGQ6IHtcbiAgLy8gICBvdXREaXI6ICdkaXN0JyxcbiAgLy8gICByb2xsdXBPcHRpb25zOiB7XG4gIC8vICAgICBpbnB1dDoge1xuICAvLyAgICAgICBvY3ViaXRzOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC5qcycpLFxuICAvLyAgICAgICBUZXh0SW5wdXQ6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2NvbXBvbmVudHMvVGV4dElucHV0L1RleHRJbnB1dC5qc3gnKVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIGJ1aWxkOiB7XG4gIC8vICAgbGliOiB7XG4gIC8vICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXguanMnKSxcbiAgLy8gICAgIG5hbWU6ICdvY3ViaXRzJyxcbiAgLy8gICAgIGZvcm1hdHM6IFsndW1kJywgJ2VzJ10sXG4gIC8vICAgICBmaWxlTmFtZTogJ29jdWJpdHMnXG4gIC8vICAgfSxcbiAgLy8gICByb2xsdXBPcHRpb25zOiB7XG4gIC8vICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgLy8gICAgIG91dHB1dDoge1xuICAvLyAgICAgICBtYW51YWxDaHVua3M6IHtcbiAgLy8gICAgICAgICBUZXh0SW5wdXQ6IFsnLi9zcmMvY29tcG9uZW50cy9UZXh0SW5wdXQvVGV4dElucHV0LmpzJ10sXG4gIC8vICAgICAgICAgU2VsZWN0SW5wdXQ6IFsnLi9zcmMvY29tcG9uZW50cy9TZWxlY3RJbnB1dC9TZWxlY3RJbnB1dC5qcyddXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH0sXG5cbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQGNvbXBvbmVudHMnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb25lbnRzJyksXG4gICAgICAnQGxpYic6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2xpYicpXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1VixTQUFTLG9CQUFvQjtBQUNwWCxTQUFTLGVBQWU7QUFDeEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUNoQixTQUFTLGtCQUFrQjtBQUozQixJQUFNLG1DQUFtQztBQVF6QyxJQUFNLG9CQUFvQjtBQUFBLEVBQ3hCLFVBQVU7QUFBQTtBQUFBLEVBQ1YsTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLEVBQ1YsWUFBWTtBQUFBLEVBQ1osVUFBVTtBQUNaO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsV0FBVyxpQkFBaUIsQ0FBQztBQUFBLEVBQ3ZELE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsTUFBTTtBQUFBLE1BQ04sVUFBVSxDQUFDLFdBQVcsV0FBVztBQUFBLElBQ25DO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUsvQixRQUFRO0FBQUE7QUFBQSxRQUVOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUE0RUEsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsZUFBZSxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLE1BQ2xELFFBQVEsUUFBUSxrQ0FBVyxTQUFTO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
