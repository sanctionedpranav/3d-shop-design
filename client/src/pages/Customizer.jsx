import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import config from "../config";
import { store } from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";

const Customizer = () => {
  return (
  <div>Customizer</div>
  )
};

export default Customizer;
