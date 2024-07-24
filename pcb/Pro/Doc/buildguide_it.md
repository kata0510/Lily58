# Lily58 Pro Guida al montaggio [WIP]

## Parti necessarie

| Nome parte                                                       | Quantità               | Note                                                                                                                                                                                                                                                       | Foto |
| ---------------------------------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| PCB Lily 58 PCB                                                  | 2 pezzi                |                                                                                                                                                                                                                                                            |
| Rivestimento Lily 58                                             | 1 confezione (4 pezzi) | 2 pannelli pieni, 2 con fori per interruttori                                                                                                                                                                                                              |
| [ProMicro](https://yushakobo.jp/shop/promicro-spring-pinheader/) | 2 pezzi                | Opzionalmente, usare una [testata con perno a molla (passante)](https://yushakobo.jp/shop/a01mc-00/) per ridurre la saldatura ed evitare danni alla fragile scheda del ProMicro. (Il componente passante consigliato è incluso nel kit venduto da YushaKobo.) | |
| Interruttori tasti (Cherry MX, Kailh Choc)                       | 58 pezzi               | Interrottori MX e Choc usano connettori diversi                                                                                                                                                                                                            | |
| [Connettore interruttori](https://yushakobo.jp/shop/)            | 58 pezzi               | Necessari per l'installazione degli interruttori                                                                                                                                                                                                           | |
| Diodi 1N4148W                                                    | 58 pezzi               |                                                                                                                                                                                                                                                            | |
| Copritasti                                                       | 58 pezzi               | Copritasti 1.5u, possono essere anche 1u                                                                                                                                                                                                                   | |
| Moldulo OLED                                                     | 2 pezzi                |                                                                                                                                                                                                                                                            | |
| Interruttore tattile                                             | 2 pezzi                | Interruttore tattile per il reset                                                                                                                                                                                                                          | |
| Presa TRRS                                                       | 2 pezzi                |                                                                                                                                                                                                                                                            | |
| Distanziatore M2                                                 | 10  pezzi, 4 pezzi     | Choc: 4mm, MX: 7mm                                                                                                                                                                                                                                         | |
| Vite M2                                                          | 28 pezzi               |                                                                                                                                                                                                                                                            | |
| Cavo TRRS                                                        | 1 cavo                 | Cavo audio da 3.5mm, chiamato anche  cavo AUX (raccomandato il 4-poli)                                                                                                                                                                                     | |
| Cavo Micro USB                                                   | 1 pezzo                | Connettore magnetico raccomandanto a causa dell fragilità della presa ProMicro                                                                                                                                                                             | |

## Introduzione
La versione Pro ha varianti di colore e le foto in questa guida al
montaggio sono della versione nera, ma la versione bianca è
funzionalmente identica.

In base al colore e alla data di rilascio, alcune parti potrebbero
essere differenti, ma non c'è nessuna differenza di funzionamento.

**Notare che il rivestimento della versione nera ha una verniciatura
antigraffio (resistente alla saldatura) che può arrivare con graffi
derivanti dalla spedizione e trasporto.
Questa è una cosa tipica del prodotto.**

**In aggiunta, fare attenzione che il rivestimento può graffiarsi se urta
o sfrega una cosa dura, dopo il montaggio.**

La scheda (PCB) è reversibile.
Montiamo le parti **su entrambi i lati**.

Segnare la superficie con del nastro per indicare chiaramente il fronte
e il retro di ciascuna scheda.
![51965707-c6841d80-24ad-11e9-8e00-b7113b20fb67](https://user-images.githubusercontent.com/6285554/51967194-0947f480-24b2-11e9-860f-e45197cf0983.jpg)
![unadjustednonraw_thumb_2ccb](https://user-images.githubusercontent.com/6285554/53638905-1d2a7600-3c6b-11e9-9a39-a121c9b407b6.jpg)

## Attaccare i diodi
I diodi sono forniti in un contenitore a nastro di plastica.
E' facile far cadere i componenti quando si rimuove il nastro, quindi
aprire con calma e con cura.
(E' più facile gestire i diodi se si apre il contenitore con cura sopra
un piccolo piatto.)
![2019-01-26 13 52 14](https://user-images.githubusercontent.com/6285554/51967206-1238c600-24b2-11e9-9617-01d8755c5b7f.jpg)
I diodi vanno montati sul **retro** della scheda.

Saldare colla cablatura del diodo che punta sempre nella direzione della
freccia disegnata sulla scheda (mostrata nella figura successiva).
Se l'orientamento non è corretto, il tasto non risponde.
![2019-02-28 14 08 00](https://user-images.githubusercontent.com/6285554/53542561-53300300-3b62-11e9-8b83-5758ce400491.png)

Applicare una saldatura preliminare (sciogliere una piccola quantità sul
substrato) di un piedino del diodo sulla scheda.
![2019-01-26 13 48 26](https://user-images.githubusercontent.com/6285554/51965724-cbe16800-24ad-11e9-8afc-17c5b8eebda8.jpg)

Quindi usare delle pinzette per saldare un lato del diodo, usando la
pre-saldatura per assicurare il diodo.
![2019-01-26 13 54 10](https://user-images.githubusercontent.com/6285554/51967222-1cf35b00-24b2-11e9-9624-26ff45f7bc9b.jpg)
Quindi saldare il lato rimanente.

Quando tutti i diodi sono stati saldati, controllare eventuali punti
mancanti.
![2019-01-26 14 18 25](https://user-images.githubusercontent.com/6285554/51967226-1f55b500-24b2-11e9-93f5-2802156a4d10.jpg)

Si può usare un multimetro sul fronte della scheda per assicurarsi che
le connessioni saldate siano buone e che l'orientamento dei diodi sia
corretto.

## Saldare i connettori
I connettori sono montati sul **retro**, sullo stesso lato dei diodi.

Come nell'approccio usato sopra per i diodi, si può iniziare con una
pre-saldatura di un lato del connettore, piazzare quindi il componente e
tenerlo in posizione con delle pinzette.
(I connettori possono essere tenuti in posizione anche a mano, ma fate
attenzione a non bruciarvi.)
L'immagine mostra un connettore MX saldato; si prega di installare i
connettori Choc sul lato inferiore.
![socket](https://user-images.githubusercontent.com/6285554/57197682-3de1b580-6fa5-11e9-90b1-fca894e1e7d2.png)

Per parti che richiedono forza, saldare fermamente entrambe le
connessioni e verificare che il risultato finale non sia molle o non
fisso.
![2019-01-26 14 38 04](https://user-images.githubusercontent.com/6285554/51967230-2250a580-24b2-11e9-94ce-591746c49f50.jpg)


## Saldare il connettore TRRS e il tasto reset
Il connnettore TRRS e il tasto reset vanno montati sul **fronte**
(quello marcato col nastro adesivo).
Attaccare le parti e fissarle temporaneamente col nastro.
Gira la scheda e salda i piedini, assicurandoti che il connettore TRRS e
il tasto reset siano attaccati fermamente alla scheda.
![2019-01-26 14 39 53](https://user-images.githubusercontent.com/6285554/51967627-2c26d880-24b3-11e9-9764-aa51975c1eef.jpg)
![2019-01-26 14 43 23](https://user-images.githubusercontent.com/6285554/51967628-2cbf6f00-24b3-11e9-96e6-8f003c53d57b.jpg)


## Attacca lo schermo OLED
Sul **fronte** della scheda, utilizza sufficiente saldatura per
collegare i quattro terminali nella sezione del ProMicro.
Attacca il connettore per l'OLED come il connettore TRRS sopra.
Attenzione a non usare troppa saldatura, poiché può finire nel
connettore.
![unadjustednonraw_thumb_2db2](https://user-images.githubusercontent.com/6285554/53293031-d45c6280-380f-11e9-8f1c-1c167b27cfd3.jpg)

Inserisci i piedini OLED nel connettore, collega il modulo OLED e salda
i quattro piedini.

## Installa il Pro Micro
La spina inclusa nel sacchetto ProMicro non deve essere usata.
Per i kit acquistato da Yyushakobo, è inclusa una spina con perno a
molla, quindi usa quella.

![IMG_2662](https://user-images.githubusercontent.com/6285554/57210525-f5171480-7017-11e9-9d92-3a345d53db94.jpg)
Quando si attacca la spina con perno a molla (passante), saldarla
secondo il metodo descritto nella guida al montaggio della Helix e
quindi attaccarla alla scheda Lily 58.
[Guida al montaggio Helix](https://github.com/MakotoKurauchi/helix/blob/master/Doc/buildguide_jp.md#pro-micro)

Notare i **fori evidenziati sulla scheda**, e inserire il ProMicro in
quei fori.
Attenzione, i **collegamenti sono diversi tra destra e sinistra**.

![ProMicro_PCB](https://user-images.githubusercontent.com/6285554/48819671-6a599a80-ed94-11e8-8e5d-6a6abca326a7.png)

## Attacca il distanziatore
Attacca i quattro distanziatori circolarei da 10mm vicino al ProMicro.
E' facile inserire una vite dal retro della scheda e attaccare il
distanziatore dall'alto.
![2019-01-26 15 02 38](https://user-images.githubusercontent.com/6285554/51967859-c0913b00-24b3-11e9-966c-f3621ed398e5.jpg)

Rimuovere il nastro che identifica fronte e retro della scheda.

## Attaccare gli interruttori
Attaccare i distanziatoro sul rivestimento superiore, per allineamento.
(MX: 7mm Choc: 4mm)
![2019-01-26 14 56 05](https://user-images.githubusercontent.com/6285554/51967395-912dfe80-24b2-11e9-9cc7-b4520063f36c.jpg)
![2019-01-26 14 56 24](https://user-images.githubusercontent.com/6285554/51967376-83787900-24b2-11e9-82a0-850556daccfc.jpg)

Attaccare quattro interruttori sul rivestimento superiore.
(In caso di interruttori Choc, iniziare con due interruttori può essere
più facile.)
![2019-01-26 14 58 48](https://user-images.githubusercontent.com/6285554/51967380-87a49680-24b2-11e9-80b9-a45564afc8cf.jpg)

Inserire l'interruttore sulla scheda per allineamento, e allinearlo coi
componenti
![2019-01-26 15 01 12](https://user-images.githubusercontent.com/6285554/51967478-c3d7f700-24b2-11e9-9f2f-4e75efc215a1.jpg)

Dopo aver verificato che non ci sono pieghe nei piedini
dell'interruttore, puoi attaccarlo rigidamente iniziando dalla fila
centrale e andando verso l'esterno.
Attenzione: gli interruttori Kailh Box e Choc richiedono un po' di forza
per l'installazione.

Dopo che il montaggio è completo, spingere ancora gli interruttori per
verificare l'installazione.
![2019-01-26 15 10 06](https://user-images.githubusercontent.com/6285554/51967840-b66f3c80-24b3-11e9-8f50-6d8d31fe85e5.jpg)

## Installazione della protezione acrilica ProMicro
Rimuovere la plastica protettica che copre la protezione acrilica e
attaccarla sulla scheda,
**Montare il lato più largo (indicato con "幅が広い" in figura) all'esterno.**

![Avvitare](https://user-images.githubusercontent.com/6285554/48837829-c4288780-edc9-11e8-8efb-6714d8e68e92.png).

![2019-01-26 15 21 15](https://user-images.githubusercontent.com/6285554/51967842-b8d19680-24b3-11e9-8402-85180ce10403.jpg)

## Scrivere la mappa caratteri
La scheda richiede una mappa caratteri per funzionare.
Questo paragrafo suppone che tu abbia familiarità colle mappe carattere
e l'uso dello strumento QMK.
Altrimenti, fai riferimento alla guida
[Getting Started](https://docs.qmk.fm/#/getting_started_build_tools) di
QMK.
(Windows: MSYS2; Mac, Linux: avrdude)

Si può usare lo
[strumento QMK](https://github.com/qmk/qmk_toolbox/releases) per
scrivere mappe carattere non personalizzate tramite GUI, evitando la
necessità di configurare un ambiente QMK locale.
(Per le mappe carattere personalizzate, si consiglia la preparazione
dell'intero ambiente come descritto sopra.)

Esegui il seguente comando nella cartella `qmk_firmware` per scrivere la
mappa caratteri predefinita di Lily58:
```shell
sudo make lily58:default:avrdude
```
Quando si legge
```text
Detecting USB port, reset your controller now ...
```
si può premere il tasto reset sulla tastiera per iniziare la
memorizzazione.
Ciascuna delle due metà della tastiera deve essere programmata
separatamente usando questo approccio.

## Mappa caratteri predefinita
La mappa caratteri predefinita è stata creata assumendo che venga usata
in un ambiente MacOS/US.
Sentiti libero di essere creativo e di sperimentare con mappe carattere
che seguano le tue preferenze; considera la possibilità di cambiare al
layout JIS o aggiungere tasti per passare da inglese a kana, per esempio.

Il meglio sulla mia tastiera:
![lily58_default](https://user-images.githubusercontent.com/6285554/47273241-38ee8300-d5cc-11e8-9099-10c1b35e24fc.png)

## Controllo operazioni
Collegare i lati destro e sinistro con un cavo TRRS, collegare il cavo
Micro USB al ProMicro di sinistra (in caso di mappa caratteri
predefinita), e controllare che i tasti rispondano.

Il montaggio è completo aggiungendo i quattro piedini di gomma sul retro
di ciascuna scheda.
Grazie per il tuo lavoro.
![2019-01-26 15 24 52](https://user-images.githubusercontent.com/6285554/51967992-24b3ff00-24b4-11e9-8cd3-1e679094682f.jpg)
![unadjustednonraw_thumb_2ddc](https://user-images.githubusercontent.com/6285554/53640050-6203dc00-3c6e-11e9-9434-5591ed3e414f.jpg)

## In caso di problemi
### Q. Una o più righe/colonne degli interruttori non risponde
A. Il ProMicro potrebbe non essere saldato e collegato correttamente.
Ricontrolla, ri-salda e reinstalla se necessario.

### Q. Un tasto non risponde
A. Potrebbe esserci un problema con l'inserimento di quell'interruttore,
connettore o diodo.

Nel caso di errato inserimento dell'interruttore: dopo aver rimosso
l'interruttore assicurati che i piedini non siano piegati e quindi
rimettilo dentro e installa di nuovo.

Nel caso di errato collegamento del connnettore: ri-salda il connettore
col problema oppure migliora la saldatura se il collegamento è debole.

Nel caso di diodo mal collegato: controlla la direzione del diodo in
questione.
Se è sbagliata, rimuovilo e ri-saldalo.
inoltre, se non c'è abbastanza saldatura, ri-salda.

### Q. Viene fuori un simbolo diverso ("@" o "[", ecc.) da quello digitato (su Windows, ecc.)
Dato che la tastiera viene riconosciuta come JIS dal sistema operativo,
potrebbe comprarire un altro simbolo.
Si prega di impostare la Lily 58 come tastiera US nelle impostazioni del
sistema operativo.
Dopo aver cambiato configurazione, il passaggio all'input giapponese
viene fatto dalla tastiera US e risulta diverso dalla tastiera JIS
quindi si prega di fare attenzione (può essere personalizzato nella
mappa caratteri, ecc.)

**In caso di problemi, manda pure un messaggio sul canale #Lily58 su
Discord ("Self-Made Keyboards in Japan"
(https://discordapp.com/invite/NM7XtDW)) o Twitter: @F_YUUCHI**.

## Cambiare la mappa caratteri
Questa tastiera fatta in casa usa il firmware QMK descritto sopra.
Il firmware QMK è altamente personalizzabile e puoi sbloccare un sacco
di funzionalità semplicemente modificando la mappa.

### Modifica `keymap.c` e personalizza
Quando si personalizza una mappa caratteri, inizia facendo una copia
della cartella `qmk_firmware/keyboards/lily58/keymaps/default` e
modificando il file `keymap.c` dentro quella cartella.
Fai riferimento alla
[documentazione ufficiale QMK](https://docs.qmk.fm/#/keycodes) per i
codici dei tasti e i dettagli della programmazione.

Dopo aver cambiato la mappa caratteri,
```shell
sudo make lily58:(any folder name):avrdude
```
Se ricevi un errore, ricontrolla la scheda, connessione e comando.

### Come personalizzare usando il configuratore QMK (deprecato)
Se usi il [configuratore QMK](https://config.qmk.fm/#/lily58/rev1/LAYOUT),
puoi creare una mappa caratteri originale dal browser, senza modificare
il file `keymap.c`.
Carica il JSON scaricato nel Toolbox QMK e scrivilo sulle schede.
