﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnyDeck.Mixer
{
    internal class MixerConfig
    {
        public MixerConfig(bool enabled, string customName)
        {
            this.Enabled = enabled;
            this.CustomName = customName;
        }

        public bool Enabled { get; set; }
        public string CustomName { get; set; }
    }
}
