'use client'
import Link from 'next/link'
import Image from 'next/image'
import Swiperfirstbis from '../swiper/swiperfirstbis'
import Swiperfirst from '../swiper/swiperfirst'
import MaterialSlider from '../swiper/swipersecond'
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });


export default function Presentation() {
  const [showMaterialSlider, setShowMaterialSlider] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowMaterialSlider(true), 2000);
    return () => clearTimeout(timer);
  }, []);
  const lottieJson = { "nm": "Loading ", "ddd": 0, "h": 500, "w": 500, "meta": { "g": "LottieFiles AE 1.0.0" }, "layers": [{ "ty": 4, "nm": "Rectangle_1", "sr": 1, "st": 0, "op": 90.0000036657751, "ip": 0, "hd": false, "ddd": 0, "bm": 0, "hasMask": false, "ao": 0, "ks": { "a": { "a": 0, "k": [-125, -107, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }, "sk": { "a": 0, "k": 0 }, "p": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [250, 157.375, 0], "t": 0, "ti": [0.031, -0.052, 0], "to": [15.448, 15.438, 0] }, { "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [342.688, 250, 0], "t": 15, "ti": [15.448, -15.427, 0], "to": [-0.059, 0.098, 0] }, { "s": [250, 342.563, 0], "t": 30.0000012219251 }], "ix": 2 }, "r": { "a": 0, "k": 45, "ix": 10 }, "sa": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100, "ix": 11 } }, "ef": [], "shapes": [{ "ty": "gr", "bm": 0, "hd": false, "mn": "ADBE Vector Group", "nm": "Rectangle 1", "ix": 1, "cix": 2, "np": 3, "it": [{ "ty": "sh", "bm": 0, "hd": false, "mn": "ADBE Vector Shape - Group", "nm": "Path 1", "ix": 1, "d": 1, "ks": { "a": 0, "k": { "c": true, "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[57, -57], [57, 57], [-57, 57], [-57, -57]] }, "ix": 2 } }, { "ty": "st", "bm": 0, "hd": false, "mn": "ADBE Vector Graphic - Stroke", "nm": "Stroke 1", "lc": 1, "lj": 1, "ml": 4, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 0, "ix": 5 }, "c": { "a": 0, "k": [1, 0, 0], "ix": 3 } }, { "ty": "fl", "bm": 0, "hd": false, "mn": "ADBE Vector Graphic - Fill", "nm": "Fill 1", "c": { "a": 0, "k": [0.6784, 0, 0.149], "ix": 4 }, "r": 1, "o": { "a": 0, "k": 100, "ix": 5 } }, { "ty": "tr", "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "p": { "a": 0, "k": [-125, -107], "ix": 2 }, "r": { "a": 0, "k": 0, "ix": 6 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "o": { "a": 0, "k": 100, "ix": 7 } }] }], "ind": 1 }, { "ty": 4, "nm": "Rectangle_2", "sr": 1, "st": 0, "op": 90.0000036657751, "ip": 0, "hd": false, "ddd": 0, "bm": 0, "hasMask": false, "ao": 0, "ks": { "a": { "a": 0, "k": [-125, -107, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }, "sk": { "a": 0, "k": 0 }, "p": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [342.688, 250, 0], "t": 0, "ti": [-0.01, 0, 0], "to": [0.052, -0.073, 0] }, { "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [250, 342.563, 0], "t": 15, "ti": [0.198, -0.073, 0], "to": [0.104, 0, 0] }, { "s": [157.313, 250, 0], "t": 30.0000012219251 }], "ix": 2 }, "r": { "a": 0, "k": 45, "ix": 10 }, "sa": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100, "ix": 11 } }, "ef": [], "shapes": [{ "ty": "gr", "bm": 0, "hd": false, "mn": "ADBE Vector Group", "nm": "Rectangle 1", "ix": 1, "cix": 2, "np": 3, "it": [{ "ty": "sh", "bm": 0, "hd": false, "mn": "ADBE Vector Shape - Group", "nm": "Path 1", "ix": 1, "d": 1, "ks": { "a": 0, "k": { "c": true, "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[57, -57], [57, 57], [-57, 57], [-57, -57]] }, "ix": 2 } }, { "ty": "st", "bm": 0, "hd": false, "mn": "ADBE Vector Graphic - Stroke", "nm": "Stroke 1", "lc": 1, "lj": 1, "ml": 4, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 0, "ix": 5 }, "c": { "a": 0, "k": [1, 0, 0], "ix": 3 } }, { "ty": "fl", "bm": 0, "hd": false, "mn": "ADBE Vector Graphic - Fill", "nm": "Fill 1", "c": { "a": 0, "k": [0.8902, 0.251, 0.2471], "ix": 4 }, "r": 1, "o": { "a": 0, "k": 100, "ix": 5 } }, { "ty": "tr", "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "p": { "a": 0, "k": [-125, -107], "ix": 2 }, "r": { "a": 0, "k": 0, "ix": 6 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "o": { "a": 0, "k": 100, "ix": 7 } }] }], "ind": 2 }, { "ty": 4, "nm": "Rectangle_3", "sr": 1, "st": 0, "op": 90.0000036657751, "ip": 0, "hd": false, "ddd": 0, "bm": 0, "hasMask": false, "ao": 0, "ks": { "a": { "a": 0, "k": [-125, -107, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }, "sk": { "a": 0, "k": 0 }, "p": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [250, 342.563, 0], "t": 0, "ti": [0.04, -0.012, 0], "to": [0.052, 0.198, 0] }, { "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [157.313, 250, 0], "t": 15, "ti": [0.052, -0.563, 0], "to": [-0.492, 0.145, 0] }, { "s": [250, 157.375, 0], "t": 30.0000012219251 }], "ix": 2 }, "r": { "a": 0, "k": 45, "ix": 10 }, "sa": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100, "ix": 11 } }, "ef": [], "shapes": [{ "ty": "gr", "bm": 0, "hd": false, "mn": "ADBE Vector Group", "nm": "Rectangle 1", "ix": 1, "cix": 2, "np": 3, "it": [{ "ty": "sh", "bm": 0, "hd": false, "mn": "ADBE Vector Shape - Group", "nm": "Path 1", "ix": 1, "d": 1, "ks": { "a": 0, "k": { "c": true, "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[57, -57], [57, 57], [-57, 57], [-57, -57]] }, "ix": 2 } }, { "ty": "st", "bm": 0, "hd": false, "mn": "ADBE Vector Graphic - Stroke", "nm": "Stroke 1", "lc": 1, "lj": 1, "ml": 4, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 0, "ix": 5 }, "c": { "a": 0, "k": [1, 0, 0], "ix": 3 } }, { "ty": "fl", "bm": 0, "hd": false, "mn": "ADBE Vector Graphic - Fill", "nm": "Fill 1", "c": { "a": 0, "k": [0.6784, 0, 0.149], "ix": 4 }, "r": 1, "o": { "a": 0, "k": 100, "ix": 5 } }, { "ty": "tr", "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "p": { "a": 0, "k": [-125, -107], "ix": 2 }, "r": { "a": 0, "k": 0, "ix": 6 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "o": { "a": 0, "k": 100, "ix": 7 } }] }], "ind": 3 }, { "ty": 4, "nm": "Rectangle_4", "sr": 1, "st": 0, "op": 90.0000036657751, "ip": 0, "hd": false, "ddd": 0, "bm": 0, "hasMask": false, "ao": 0, "ks": { "a": { "a": 0, "k": [-125, -107, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }, "sk": { "a": 0, "k": 0 }, "p": { "a": 1, "k": [{ "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [157.313, 250, 0], "t": 0, "ti": [-0.079, 0.525, 0], "to": [15.448, -15.438, 0] }, { "o": { "x": 0.333, "y": 0 }, "i": { "x": 0.667, "y": 1 }, "s": [250, 157.375, 0], "t": 15, "ti": [-15.448, -15.438, 0], "to": [0.019, -0.125, 0] }, { "s": [342.688, 250, 0], "t": 30.0000012219251 }], "ix": 2 }, "r": { "a": 0, "k": 45, "ix": 10 }, "sa": { "a": 0, "k": 0 }, "o": { "a": 0, "k": 100, "ix": 11 } }, "ef": [], "shapes": [{ "ty": "gr", "bm": 0, "hd": false, "mn": "ADBE Vector Group", "nm": "Rectangle 1", "ix": 1, "cix": 2, "np": 3, "it": [{ "ty": "sh", "bm": 0, "hd": false, "mn": "ADBE Vector Shape - Group", "nm": "Path 1", "ix": 1, "d": 1, "ks": { "a": 0, "k": { "c": true, "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[57, -57], [57, 57], [-57, 57], [-57, -57]] }, "ix": 2 } }, { "ty": "st", "bm": 0, "hd": false, "mn": "ADBE Vector Graphic - Stroke", "nm": "Stroke 1", "lc": 1, "lj": 1, "ml": 4, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 0, "ix": 5 }, "c": { "a": 0, "k": [0.9176, 0, 0], "ix": 3 } }, { "ty": "fl", "bm": 0, "hd": false, "mn": "ADBE Vector Graphic - Fill", "nm": "Fill 1", "c": { "a": 0, "k": [0.8902, 0.251, 0.2471], "ix": 4 }, "r": 1, "o": { "a": 0, "k": 100, "ix": 5 } }, { "ty": "tr", "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "p": { "a": 0, "k": [-125, -107], "ix": 2 }, "r": { "a": 0, "k": 0, "ix": 6 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "o": { "a": 0, "k": 100, "ix": 7 } }] }], "ind": 4 }], "v": "4.8.0", "fr": 29.9700012207031, "op": 31.0000012626559, "ip": 0, "assets": [] };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
      <div id="col1">
        <div
          id="line1"
          className="flex flex-col gap-2 pl-12 justify-center h-full"
        >
          <p className="font-medium">Votre expert en</p>
          <p className="font-bold text-2xl">Pliage aluminium sur mesure </p>
          <p className="text-md">
            Optez pour le pliage aluminium sur mesure avec Gedimat, votre expert
            en solutions adaptées à vos besoins. <br />
            <br />
            Que ce soit pour un projet résidentiel ou professionnel, bénéficiez
            d’un service précis et fiable. Nous transformons vos idées en
            réalisations concrètes, avec un aluminium de qualité, parfaitement
            ajusté à vos attentes. <br />
            <br />
            Faites confiance à notre expertise et démarquez-vous grâce à des
            finitions sur mesure, pensées pour durer dans le temps et répondre à
            vos exigences.
          </p>
          {/* <div className="lgBtn greyBtn max-w-[124px] my-2">
            <Link href="/presentation">en savoir +</Link>
          </div> */}
        </div>
      </div>

      <div id="col2">
        <div className="flex items-center justify-end gap-2 pb-4">
          <Image
            src="/images/arrow-small.jpg"
            width={19}
            height={19}
            alt=""
            className="mt-4"
          />
          <p className="text-xl">Besoin</p>
          <p className="text-xl font-bold">d&apos;inspirations ?</p>
        </div>

        {/* <Swiperfirstbis /> */}
        <Link href="/inspirations">
          <Swiperfirst />
        </Link>
        <Link href="/inspirations">
          {showMaterialSlider ? (
            <MaterialSlider />
          ) : (
            <div className="flex justify-center items-center min-h-[200px]">
              <Lottie animationData={lottieJson} loop={true} style={{ width: 120, height: 120 }} />
            </div>
          )}
        </Link>
      </div>
    </div>
  )
}
