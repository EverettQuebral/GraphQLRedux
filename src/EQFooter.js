import React from 'react'
import StickyFooter from 'react-sticky-footer';

const EQFooter = () => (
  <StickyFooter
      bottomThreshold={50}
      normalStyles={{
      backgroundColor: "#999999",
      padding: "2rem"
      }}
      stickyStyles={{
      backgroundColor: "rgba(255,255,255,.8)",
      padding: "2rem"
      }}
  >
    Everett Quebral
  </StickyFooter>
)

export default EQFooter