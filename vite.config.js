export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three-chunk': ['three'],
        },
      },
    },
  },
};