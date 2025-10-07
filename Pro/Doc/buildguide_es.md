# Lily58 Pro Build Guide

## Piezas requeridas

| Componente | Cantidad | Notas | Foto |
| ------- | -------- | ------- | ----- |
| Lily 58 PCB | 2 piezas ||
| Lily 58 case | 1 set (4 piezas) | 2 paneles solidos, 2 con agujeros para los switches |
| [ProMicro](https://yushakobo.jp/shop/promicro-spring-pinheader/) | 2 piezas | Opcional, usar un [spring pin header (con-through)](https://yushakobo.jp/shop/a01mc-00/) para reducir la soldadura y evitar daños en la frágil placa ProMicro. (El conector con-through recomendado se incluye en el kit que se vende en YushaKobo). ||
| Key switch (Cherry MX, Kailh choc) | 58 piezas | MX switches y choc switches usan conectores separados ||
| [Conector del Switch](https://yushakobo.jp/shop/) | 58 piezas | Necesario para la instalación de la tecla del switch ||
| Diodos 1N4148W | 58 piezas |||
| Tapas de la Tecla | 58 piezas | Tapas 1.5U, también pueden ser de 1U ||
| Módulo OLED | 2 piezas |||
| Interruptor táctil | 2 piezas | Switch reinicio táctil ||
| TRRS jack | 2 piezas ||
| Espaciador M2 | 10 piezas, 4 piezas | Choc: 4mm, MX: 7mm ||
| M2 screw | 28 piezas |||
| Cable TRRS | 1 cable | Cable para audio de 3,5 mm, también cable AUX (se recomienda cable de 4 polos) ||
| Cable micro USB | 1 unidad | Se recomienda conector magnético debido a la baja durabilidad del conector ProMicro ||

## Introducción
La versión Pro tiene variaciones de color, y las fotos de esta guía de montaje corresponden a la versión negra, pero la versión blanca es funcionalmente idéntica. Dependiendo del color y la fecha de lanzamiento, algunas piezas pueden variar, pero no hay diferencia en el funcionamiento.

**Tenga en cuenta que la carcasa de la versión negra tiene una pintura resistente a los arañazos (resistente a la soldadura) que puede llegar con arañazos debido al envío y el transporte. Esta es la naturaleza del producto.**

**Además, tenga cuidado, ya que la carcasa se rayará si golpea o roza algo duro después del montaje.**

Este sustrato (PCB) es reversible. Montaremos las piezas **en cada lado.**

Marque la superficie con cinta de enmascarar para que sea más fácil hacer un seguimiento de la parte delantera y trasera de cada tabla.
![51965707-c6841d80-24ad-11e9-8e00-b7113b20fb67](https://user-images.githubusercontent.com/6285554/51967194-0947f480-24b2-11e9-860f-e45197cf0983.jpg)
![unadjustednonraw_thumb_2ccb](https://user-images.githubusercontent.com/6285554/53638905-1d2a7600-3c6b-11e9-9a39-a121c9b407b6.jpg)


## Colocar los diodos
Los diodos se suministran en un rollo de cinta adhesiva de plástico. Es fácil que los componentes muevan al retirar la cinta, así que ábralo lenta y cuidadosamente. (Es más fácil manipular los diodos si abre el envase con cuidado sobre un plato pequeño).
![2019-01-26 13 52 14](https://user-images.githubusercontent.com/6285554/51967206-1238c600-24b2-11e9-9617-01d8755c5b7f.jpg)

Los diodos están montados en la **parte trasera** de la placa.

Suelde con el cable del diodo siempre apuntando en la dirección de la flecha dibujada en la placa (mostrada en la siguiente figura). Si la orientación es incorrecta, la tecla no responderá.
![2019-02-28 14 08 00](https://user-images.githubusercontent.com/6285554/53542561-53300300-3b62-11e9-8b83-5758ce400491.png)

Aplique soldadura preliminar (derrita una pequeña cantidad sobre el sustrato) en una almohadilla del diodo PCB.
![2019-01-26 13 48 26](https://user-images.githubusercontent.com/6285554/51965724-cbe16800-24ad-11e9-8afc-17c5b8eebda8.jpg)

Luego use pinzas para soldar un lado del diodo, usando la pre-soldadura para asegurar el diodo.
![2019-01-26 13 54 10](https://user-images.githubusercontent.com/6285554/51967222-1cf35b00-24b2-11e9-9624-26ff45f7bc9b.jpg)
Luego suelde el lado restante.

Una vez soldados todos los diodos, compruebe si faltan puntos.
![2019-01-26 14 18 25](https://user-images.githubusercontent.com/6285554/51967226-1f55b500-24b2-11e9-93f5-2802156a4d10.jpg)

Puedes usar un multímetro en la parte frontal de la placa para asegurarte de que las conexiones de soldadura sean correctas y que la orientación de los diodos sea la correcta.

## Soldar los sockets
Los sockets se montan en la **parte trasera**, el mismo lado que los diodos.

Al igual que el método anterior para los diodos, empieza por presoldar un lado de la almohadilla del socket, coloca el componente y sujétalo con pinzas. (Los sockets también se pueden sujetar con la mano, pero ten mucho cuidado de no quemarte).
La imagen muestra un socket MX soldado; instala el socket Choc en la parte inferior.
![socket](https://user-images.githubusercontent.com/6285554/57197682-3de1b580-6fa5-11e9-90b1-fca894e1e7d2.png)

Para las piezas que requieren fuerza, suelde firmemente ambas almohadillas y verifique el resultado final para detectar cualquier holgura o movimiento.
![2019-01-26 14 38 04](https://user-images.githubusercontent.com/6285554/51967230-2250a580-24b2-11e9-94ce-591746c49f50.jpg)


## Soldadura del conector TRRS y el interruptor de reinicio
El conector TRRS y el interruptor de reinicio se montan en la **parte frontal** (la que tiene la pegatina en la marca).

Conecte las piezas y fíjelas temporalmente con cinta adhesiva. Dé la vuelta a la placa y suelde los pines, asegurándose de que el conector TRRS y el interruptor de reinicio estén firmemente en contacto con la placa.
![2019-01-26 14 39 53](https://user-images.githubusercontent.com/6285554/51967627-2c26d880-24b3-11e9-9764-aa51975c1eef.jpg)
![2019-01-26 14 43 23](https://user-images.githubusercontent.com/6285554/51967628-2cbf6f00-24b3-11e9-96e6-8f003c53d57b.jpg)


## Conecte la pantalla OLED
En la **parte frontal** de la placa, aplique suficiente soldadura para unir los cuatro terminales de puente en la sección ProMicro.
Conecte el conector para la pantalla OLED, de forma similar al conector TRRS mencionado anteriormente. Tenga cuidado de no aplicar demasiada soldadura, ya que es fácil que esta se filtre hacia el conector.
![unadjustednonraw_thumb_2db2](https://user-images.githubusercontent.com/6285554/53293031-d45c6280-380f-11e9-8f1c-1c167b27cfd3.jpg)

Inserta el pin OLED en el socket, conecta el módulo OLED y suelda los cuatro pines.


## Instalar Pro Micro
El conector de pines incluido en la bolsa de ProMicro no se utiliza. Los kits comprados en YushaKobo incluyen un conector de pines con resorte, así que úsalo.
![IMG_2662](https://user-images.githubusercontent.com/6285554/57210525-f5171480-7017-11e9-9d92-3a345d53db94.jpg)
Al conectarlo con un conector de pasador de resorte (con-through), suéldelo de acuerdo con el método descrito en la guía de construcción de Helix y luego conéctelo a la PCB Lily 58. [Guía de construcción de Helix](https://github.com/MakotoKurauchi/helix/blob/master/Doc/buildguide_en.md#pro-micro)

Observe los **conjuntos de agujeros marcados en la PCB** e inserte el ProMicro en ellos. Tenga cuidado, ya que las **conexiones son diferentes para las placas derecha e izquierda**.

![ProMicro_PCB](https://user-images.githubusercontent.com/6285554/48819671-6a599a80-ed94-11e8-8e5d-6a6abca326a7.png)


## Colocar el espaciador
Coloca cuatro espaciadores redondos de 10 mm en los orificios cerca de ProMicro.
Es fácil insertar un tornillo desde la parte posterior de la placa y colocar el espaciador desde la parte superior.
![2019-01-26 15 02 38](https://user-images.githubusercontent.com/6285554/51967859-c0913b00-24b3-11e9-966c-f3621ed398e5.jpg)

Retire la cinta adhesiva que se usó para identificar la parte frontal y posterior de la placa.

## Coloque el interruptor de la tecla
Coloque los espaciadores de la placa superior para alinear.(MX: 7mm Choc: 4mm)
![2019-01-26 14 56 05](https://user-images.githubusercontent.com/6285554/51967395-912dfe80-24b2-11e9-9cc7-b4520063f36c.jpg)
![2019-01-26 14 56 24](https://user-images.githubusercontent.com/6285554/51967376-83787900-24b2-11e9-82a0-850556daccfc.jpg)

Coloque cuatro switches de la tecla en la placa superior. (En el caso de los switches Choc, puede ser más fácil empezar con dos switches en la placa).
![2019-01-26 14 58 48](https://user-images.githubusercontent.com/6285554/51967380-87a49680-24b2-11e9-80b9-a45564afc8cf.jpg)

Inserte el switch en la placa para alinearlo y alinee los componentes.
![2019-01-26 15 01 12](https://user-images.githubusercontent.com/6285554/51967478-c3d7f700-24b2-11e9-9f2f-4e75efc215a1.jpg)


Tras comprobar que las clavijas del interruptor no estén dobladas, puede fijarlo firmemente comenzando desde la fila central y avanzando hacia afuera.
Atención: Los interruptores KailhBOX y Choc requieren alimentación para su instalación.
Tras montar la placa, vuelva a presionar los interruptores para comprobar que la instalación esté completa.
![2019-01-26 15 10 06](https://user-images.githubusercontent.com/6285554/51967840-b66f3c80-24b3-11e9-8f50-6d8d31fe85e5.jpg)

## Instalación del acrílico protector ProMicro
Retire la capa protectora de plástico que cubre el acrílico y fíjelo al tablero.
**Mount with the wider side (labeled "幅が広い" here) outwards.**

![Attach with screws](https://user-images.githubusercontent.com/6285554/48837829-c4288780-edc9-11e8-8efb-6714d8e68e92.png).

![2019-01-26 15 21 15](https://user-images.githubusercontent.com/6285554/51967842-b8d19680-24b3-11e9-8402-85180ce10403.jpg)

## Escribir mapa de teclas
La placa requiere un mapa de teclas para funcionar. Esta sección asume que está familiarizado con los mapas de teclas y el uso de la herramienta QMK. De lo contrario, consulte la guía de inicio rápido de QMK.](https://docs.qmk.fm/#/getting_started_build_tools) (Windows: MSYS2; Mac, Linux: avrdude)

The [QMK Toolbox](https://github.com/qmk/qmk_toolbox/releases) permite escribir mapas de teclas no personalizados mediante una interfaz gráfica de usuario, evitando así la necesidad de configurar un entorno QMK local. (Para mapas de teclas personalizados, se recomienda compilar el entorno completo descrito anteriormente).

Ejecute lo siguiente en el directorio `qmk_firmware` para escribir el mapa de teclas predeterminado de Lily58.

    sudo make lily58:default:avrdude


Cuando aparezca el mensaje **`Detecting USB port, reset your controller now ...`**, presione el botón de reinicio del teclado para comenzar a escribir.
Cada mitad del teclado debe programarse por separado con este método.


## Mapa de teclas predeterminado
El mapa de teclas predeterminado se ha diseñado asumiendo que se usará en el entorno de teclado de MacOS/EE. UU. Siéntete libre de ser creativo y experimentar con mapas de teclas que se ajusten a tus preferencias; considera cambiar a la distribución JIS o añadir una tecla para alternar entre inglés y kana, por ejemplo.

La mejor de mi propio teclado:
![lily58_default](https://user-images.githubusercontent.com/6285554/47273241-38ee8300-d5cc-11e8-9099-10c1b35e24fc.png)

## Comprobación del funcionamiento
Conecte los lados izquierdo y derecho con un cable TRRS, conecte el cable MicroUSB al ProMicro en el lado izquierdo (si la configuración de teclas es predeterminada) y compruebe si la tecla responde.
El ensamblaje se completa colocando las cuatro patas de goma en la parte posterior de cada placa. Gracias por su esfuerzo.
![2019-01-26 15 24 52](https://user-images.githubusercontent.com/6285554/51967992-24b3ff00-24b4-11e9-8cd3-1e679094682f.jpg)
![unadjustednonraw_thumb_2ddc](https://user-images.githubusercontent.com/6285554/53640050-6203dc00-3c6e-11e9-9434-5591ed3e414f.jpg)


## En caso de problemas
### P. Una o más filas/columnas de interruptores de tecla no responden
R. Es posible que la placa ProMicro no esté soldada ni fijada firmemente. Vuelva a comprobarlo y vuelva a soldarlo y reinstálelo si es necesario.

### P. Un solo interruptor de tecla no responde
R. Puede haber un problema con la inserción, el zócalo o la soldadura del diodo del interruptor de tecla.

En caso de una inserción incorrecta del interruptor de tecla:
Después de retirar el interruptor de tecla, asegúrese de que los pines no estén doblados, vuelva a insertarlo e instálelo.

En caso de un zócalo mal conectado:
Vuelva a soldar el zócalo con problemas o, si la unión está débil, refluya y añada soldadura.

En caso de un diodo mal conectado:
Verifique la dirección del diodo en cuestión. Si está mal, retírelo y vuelva a soldarlo. Además, si no hay suficiente soldadura, vuelva a soldarlo.

### P. Se introduce un símbolo diferente al introducido con "@" o "[", etc. (en Windows, etc.).
Dado que el sistema operativo reconoce el teclado JIS, se introducirá otro símbolo al escribir con Lily 58 (se considera un teclado estadounidense).
Configura Lily 58 como teclado estadounidense en la configuración del sistema operativo. Después de cambiar, la tecla para cambiar a japonés se convierte en la tecla para el teclado estadounidense, y es diferente del teclado JIS, así que ten cuidado (se puede personalizar con la configuración de teclas, etc.).

**Si tienes algún problema, no dudes en enviar un mensaje al canal "#Lily58" en Discord. ("Self-Made Keyboards in Japan" (https://discordapp.com/invite/NM7XtDW)) o Twitter: @F_YUUCHI**

## Cambiar la configuración de teclas
Este teclado diy utiliza el firmware QMK, descrito anteriormente. El firmware QMK es muy personalizable y permite acceder a numerosas funciones simplemente editando la configuración de teclas.

### Editar keymap.c y personalizar
Para personalizar una configuración de teclas, comience por crear una copia de la carpeta `qmk_firmware/keyboards/lily58/keymaps/default` y modificar el archivo interno `keymap.c` de ese directorio.
Consulte la documentación oficial de QMK para conocer los códigos de teclas y las especificaciones de programación.

Después de cambiar el mapa de teclas,

    sudo make lily58:(any folder name):avrdude

Si recibe un error, revise la placa, la conexión y el comando.

### Cómo personalizar con el Configurador QMK (obsoleto)
Si usa el [QMK Configurator](https://config.qmk.fm/#/lily58/rev1/LAYOUT), puede crear un mapa de teclas original en el navegador sin editar el archivo `keymap.c`.
Cargue el archivo JSON descargado en la Caja de Herramientas QMK y escríbalo en las placas.
