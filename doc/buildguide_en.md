# Lily58 build guide

## Required parts

| Part name                     | Quantity                                        | Remarks                                                                                                                                                                   |
| ----------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lily58 PCB                    | 2 pieces                                        |                                                                                                                                                                           |
| Lily58 Case                   | 1 Set                                           |                                                                                                                                                                           |
| Pro Micro                     | 2 pieces                                        | It is advised to use [Conthrough](https://yushakobo.jp/shop/a01mc-00/) (sold separately) to reduce the amount of soldering and make easier to replace damaged connectors. |
| Key switch (CherryMX, PG1350) | 58 pcs (not compatible with ALPS switches) (\*) |
| Keycaps                       | 56x 1U keycaps, 2x 1.5U keycaps (\*)            | 1.5U keycaps can be replaced by 1U                                                                                                                                        |
| Diode 1N4148                  | 58 pieces                                       |                                                                                                                                                                           |
| Tact switch                   | 2 pieces                                        |                                                                                                                                                                           |
| TRRS Jack                     | 2 pieces                                        |                                                                                                                                                                           |
| M2 spacer 6mm, 10mm           | 10 pcs, 4 pcs                                   |                                                                                                                                                                           |
| M2 screws 5mm                 | 28 pcs                                          |                                                                                                                                                                           |
| TRS (TRRS) cable              | 1 piece                                         | This is an audio cable called AUX cable                                                                                                                                   |
| Micro USB / USB-C cable       | 1 cable                                         | You will need a Micro or USB-C cable depending on the USB connector of the Pro Micro MCUs. Magnet-type cable is advised to increase durability of the MCU USB connector.  |

(\*) Not included in the kit, you will have to source them yourself.

## Diode Installation

**The space between the plate and the PCB may be reduced when using low-profile switches. In this case it is advised to use [Surface mount diode (1N4148W)](http://akizukidenshi.com/catalog/g/gI- 07084/) (sold separately). If you use the provided through-hole diodes in combination with low-profile switches, try to minimize the protrusion of the soldering joints, e.g. clipping the diode legs before soldering them.**

Since this PCB is reversible, we will mount the parts on **one side at a time**. We will consider the side on which the diode is mounted as the _back side_ (represented in orange in the side-view diagram).

![pcb-overview](https://user-images.githubusercontent.com/6285554/52172886-61d20700-27bc-11e9-888f-42a95c7dd569.JPG)

Side-view diagram:

![side-view-diagram](https://user-images.githubusercontent.com/6285554/51115630-2642bd80-184c-11e9-93e5-8f85ee5e45b0.png)

Bend the legs of the diode. You can easily bend the diode legs by pressing them against a stack made with the 3 Lily PCB layers.

![diode-bending](https://user-images.githubusercontent.com/6285554/52172887-6ac2d880-27bc-11e9-9b3e-378a83c5a881.JPG)

Once you bend the diodes, mount them on the back side of the PCB (opposite side where switches and Pro Micro are mounted). Diodes have a direction, check the notation on the PCB and insert them accordingly. The black band on the diode marks the diode _cathode_ (the horizontal bar on top of the triangle that represents the diode, shown in the image below). If you solder a diode with wrong orientation the associated key will not work when pressed.

![diode-pcb](https://user-images.githubusercontent.com/6285554/52002682-f7903c80-2505-11e9-907a-8407568322da.jpg)

![diode-diagram](https://user-images.githubusercontent.com/6285554/48820707-83187f00-ed99-11e8-802e-90b23ca594a0.png)

Use can use masking tape to temporarily keep the diodes in place and prevent them from falling when turning around the PCB to solder them.

![pcb-masking-tape](https://user-images.githubusercontent.com/6285554/52172891-829a5c80-27bc-11e9-81ab-878caa8645f6.jpg)

Solder the diodes.

![pcb-solder-diodes](https://user-images.githubusercontent.com/6285554/52172899-b07fa100-27bc-11e9-9210-38bbdfb7d979.jpg)

After soldering, cut the legs of the diodes using nippers. The legs tend to fly away when cut, hold them with your fingers to avoid this.

Once the diode legs are cut, install the 10mm spacers (long spacer).

![pcm-10mm-spacers](https://user-images.githubusercontent.com/6285554/52172901-b07fa100-27bc-11e9-88a8-61a0eacfc6a4.jpg)

## Solder the TRRS Jack and Reset Switch

Install the TRRS jack and tact switch on the _top side_ of the PCB. Secure them with masking tape to prevent them from falling while soldering them.

![pcb-tape-jack-reset](https://user-images.githubusercontent.com/6285554/52172948-8da1bc80-27bd-11e9-928b-fba7b8fa2b49.jpg)

Solder the TRRS jack and tact switch pins on the back side.

![pcb-solder-jack-reset](https://user-images.githubusercontent.com/6285554/52172964-e6715500-27bd-11e9-9b0a-4186301a1d56.jpg)

## Solder OLED display (optional)

Enabling the OLED display requires bridging the 4 pads on the **front side** of the PCB, near the Pro Micro.

![oled-bridge](https://user-images.githubusercontent.com/6285554/52172989-41a34780-27be-11e9-858a-cc69c2626160.jpg)

## Solder the Pro Micro microcontroller

#### Using Conthrough pins (socketed microcontroller)

When using [Conthrough pins](https://yushakobo.jp/shop/a01mc-00/) together with the Pro Micro (_socketed microcontroller_), the pins are soldered to the microcontroller and the socket are soldered to the PCB. The pins of the Pro Micro are inserted into the PCB sockets without needing any soldering. Once installed, make sure microcontroller is firmly seated on the sockets.

Check [Helix's Build Guide (JP)](https://github.com/MakotoKurauchi/helix/blob/master/Doc/buildguide_jp.md#pro-micro) for further details.

### Using supplied pins

Install the Pro Micro on the front side of the PCB. The short side of the pins are sldered to the Pro Micro MCU, the long side is soldered to the Lily58 PCB.

The long side of the pins go in the PCB holes marked by long rectangles (highlighted in red on the diagram).

![pcb-promicro](https://user-images.githubusercontent.com/6285554/48819671-6a599a80-ed94-11e8-8e5d-6a6abca326a7.png)

The side of the Pro Micro with most of the integrated components **faces down** when properly installed on the PCB.

![promicro-pins](https://user-images.githubusercontent.com/6285554/52002684-f95a0000-2505-11e9-83f6-6eb3dc8f2a02.jpg)

Solder the pins on the font side of the PCB (use masking tape if required to keep them in place)

![pcb-solder-promicro](https://user-images.githubusercontent.com/6285554/52002687-f9f29680-2505-11e9-9ecf-b7bf3ad9f270.jpg)

Once the pins are soldered, install the ProMicro (side with most components facing down), use some masking tape to keep it in place and solder it. When you are done, cut the pin excess with the nippers.

## Install the switches

Fit the 4 spacers in the corresponding places of the top plate, add 4 key switches for extra stability, insert them in the PCB taking care to not bend their pins.

![pcb-spacers-switches](https://user-images.githubusercontent.com/6285554/52173011-9a72e000-27be-11e9-9716-4c9a301c35ac.jpg)

Check that the switches are properly inserted, they are not _floating_ nor tilted, then solder them.

![pcb-switch-installation](https://user-images.githubusercontent.com/6285554/52173013-9fd02a80-27be-11e9-958e-54bb7e929f1d.jpg)

Install the rest of the switches in the top plate. If they are properly installed, their pins will stick out the PCB a little bit (see image below).

![pcb-switch-pin-ok](https://user-images.githubusercontent.com/6285554/52002691-fb23c380-2505-11e9-8fa1-c75d20d3636d.jpg)

If a pin is bent or the switch is not properly inserted into the top plate, it will not stick out. In that case remove the affected switch and check it.

![switch-bent-pin](https://user-images.githubusercontent.com/6285554/48868657-b7ce1a00-ee1d-11e8-9346-9bfc967e95cf.png)

Install and solder all switches.

## Install the cover for the Pro Micro

Attach the acrylic on top of the Pro Micro MCU, the wider side of the cover faces out, this is to the center of the split keyboard (see cover diagram).

![promicro-cover](https://user-images.githubusercontent.com/6285554/48837829-c4288780-edc9-11e8-8efb-6714d8e68e92.png)

Screw the cover using the flat head screws.

![promicro-cover-installed](https://user-images.githubusercontent.com/6285554/52173081-ea9e7200-27bf-11e9-9551-3eb41a0389cb.jpg)

## Configure and flash QMK firmware

Modifying and flashing a QMK keymap for the Lily58 requires a working QMK building environment, [please check the QMK official documentation](https://docs.qmk.fm/#/getting_started_build_tools). If you are going to use the [QMK Toolbox](https://github.com/qmk/qmk_toolbox/releases), there is no need to configure a building an environment, you can just define the keymap using the Toolbox GUI (keep in mind that the Toolbox cannot change the keymap).

The firmware flashing process requires the QMK firmware to be written in **both** microcontrollers of the Lily58 keyboard.

Once you have working build environment connect the first half of the keyboard to your computer. Compile and flash the default QMK keymap for Lily58 using the following command:

```sh
# instructions are for QMK release at the time of writing, 2022-12-06
qmk flash -kb lily58 -km default
```

Once the flashing process pauses and displays the message _"Detecting USB port, reset your controller now..."_, press the reset button on the first half of the keyboard to proceed to write the firmware.

Now repeat the flash process for the second half of the keyboard.

The Default keymap looks like this:

![lily58-keymap-default](https://user-images.githubusercontent.com/6285554/47273241-38ee8300-d5cc-11e8-9099-10c1b35e24fc.png)

## Testing

Connect the left and right parts of the keyboard connecting a TRS cable to the TRRS jacks, connect the MicroUSB cable to the Pro Micro on the left half of the keyboard (this is the half that connects to the PC in the default QMK keymap) and check if all the keys work as expected.

Complete the build by attaching 4 rubber feet on the back plate.
![back-plate-feet](https://user-images.githubusercontent.com/6285554/52173150-795fbe80-27c1-11e9-8376-edc698e943e8.jpg)

![lily58-final](https://user-images.githubusercontent.com/6285554/52002699-fd861d80-2505-11e9-96a8-f58a93534255.jpg)

Congratulations for your hard work!

## Troubleshooting

### Q. One (or multiple) rows or columns of keys do not work

A. The Pro Micro microcontroller may not be properly soldered or inserted in the sockets. Check the microcontroller mount, re-solder and re-install it if required.

### Q. A single switch does not work

A. There may be a problem with the switch itself or diode associated to it.

- Key switch: check the pins of the switch to verify the soldering joints are fine. If there is not enough solder or you have a cold joint, reapply tin.

- Diodes: check the diode has the right orientation. If the orientation is correct, try removing the diode and re-soldering it. If the amount of tin is not enough, re-solder properly.

**If you encounter any other problem, feel free to send a message to the "#Lily58" channel on the Discord server [Self-Made Keyboards in Japan](https://discordapp.com/invite/NM7XtDW) or Twitter: @F_YUUCHI**
