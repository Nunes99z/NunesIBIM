 import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <div class="foto-capa"></div>

<div class="container">
    <div class="item">
        <img src="https://samhurdphotography.s3.amazonaws.com/wp-content/uploads/2024/09/20123704/20240918_09_28_34-Edit-960x640.jpg"
            alt="Câmera Canon EOS R5">
        <div class="preço">R5: R$ 31.000,00</div>
        <h5>CANON EOS R5 (CORPO)</h5>
    </div>
    <div class="item">
        <img src="https://s3-alpha-sig.figma.com/img/7f1a/b6f3/108efb6542cf6717b1b59f22ca3a22ed?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ijvUxB8YIElGXEt1wcp1o1DeFHvOZWCh1zrdMl1rdHHL3O11YuTZdE89oL0BGyh1Qi0apW51zvr7Tsr-z6vWSoajU4ZpBXhMWrXN8zOOvN~aP6NJ54CgEVfIeSgTNZKQEaxsQuTo1Ozd6yy3AmzIL7-C0uVk67KpcSzDObpWSrwOaJceaqH1LQ9JnTe1arBtz12RUaQyun~STRmpPrtYx20vYNaWd08viC05Hg9LPSFNkiQOsklFbP5QNwrAt47QaMDCw-WBI5a7mObQ3uRUYevnOo3373OpMIsECVvK~fx9VGwEDO6lloWCKQzwBWbjsK~ok7W6AwBf6Wosf7Rwjw__"
            alt="FX30">
        <div class="preço">FX30: R$15,751.00</div>
        <h4>
            Câmera Sony FX30 Digital Cinema</h4>
    </div>
    <div class="item">
        <img src="https://images.blackmagicdesign.com/images/products/blackmagicstudiocamera/landing/hero/hero-lg.jpg?_v=1677021403"
            alt="black G2">
        <div class="preço">BLACK G2: R$15,908.25</div>
        <h5>
            Blackmagic Pocket CinemaCamera 6K G2</h5>
    </div>
    <div class="item">
        <img src="https://cdn.awsli.com.br/2500x2500/187/187298/produto/259373755/canon-r7-pre-o-bs252oqs9t.jpg"
            alt="Câmera Canon EOS R7">
        <div class="preço">R7: R$ 8.910,00 </div>
        <h5>Câmera Canon EOS R7 Mirrorless Corpo</h5>
    </div>
    <div class="item">
        <img src="https://images7.kabum.com.br/produtos/fotos/sync_mirakl/242837/C-mera-Sony-Alpha-A7iii-Mirrorless_1723216180_gg.jpg"
            alt="a73">
        <div class="preço">a7iii: R$ 10.999,00</div>
        <h5>
            Câmera Sony Alpha A7iii Mirrorless</h5>
    </div>
    <div class="item">
        <img src="https://m.media-amazon.com/images/I/61ASl1MbINL._AC_UF894,1000_QL80_.jpg" alt="blackpocket G2">
        <div class="preço">BLACK G2 Pocket: R$15,508.25</div>
        <h5>
            Blackmagic Pocket CinemaCamera 6K G2</h5>
    </div>
    <div class="item">
        <img src="https://cdn.awsli.com.br/300x300/187/187298/produto/297108204/c-mera-canon-mirrorless-eos-r3-corpo-4k-0jp70w5rz4.jpeg"
            alt="blackpocket G2">
        <div class="preço">R3: R$44.014,88</div>
        <h5>

            Câmera Canon Eos R3 24mp 4k 120fps</h5>
    </div>
    <div class="item">
        <img src="https://amateurphotographer.com/wp-content/uploads/sites/7/2022/06/Sony-ZV-E10-review-shot.jpg"
            alt="blackpocket G2">
        <div class="preço">ZV-e10: R$5.119,00</div>
        <h5>
            Sony Alpha ZV-E10
        </h5>
    </div>
    <div class="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_WGVsD4ITLS2xcI7uKqnhYWS5PGaOUne3w&s"
            alt="blackpocket G2">
        <div class="preço">BLACK PYXIS: R$ 33.999,00</div>
        <h5>
            Blackmagic PYXIS 6K L-Mount</h5>
    </div>
    <div class="item">
        <img src="https://cdn.awsli.com.br/600x450/187/187298/produto/264810870/canon-r6-mark-ii-review-eim7y3ktgr.jpg"
            alt="blackpocket G2">
        <div class="preço">R6: R$15.899,00</div>
        <h5>
            Canon Câmera mirrorless EOS R6 Mark II</h5>
    </div>
    <div class="item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AMM-JIKBXfvDKQDCwSpMu2PoFcw7FhGN_g&s"
            alt="blackpocket G2">
        <div class="preço">A7IV: R$ 19.800,00</div>
        <h5>
            Sony Alpha A7 IV</h5>
    </div>
    <div class="item">
        <img src="https://images.blackmagicdesign.com/images/products/blackmagicmicrostudiocamera/techspecs/hero/blackmagic-micro-studio-camera-4k-g2-sm.jpg?_v=1693895731"
            alt="blackpocket G2">
        <div class="preço">BLACK MICRO G2: R$ 11.039,90</div>
        <h5>
            Câmera Blackmagic Design Micro Studio 4K G2</h5>
    </div>
</div>

<footer class="footer">
    <div class="icone1">
        <img src="https://img.icons8.com/?size=160&id=9YgKo9PXNHu4&format=png">
    </div>
    <p><b>
            © 2024 LKCAM. Todos os direitos reservados.<br>
            Endereço: Rua das Flores, 123, Bairro Jardim, São Paulo, SP, 12345-678 | Telefone: (11) 98765-4321<br>
            E-mail: lkcam.lojas@gmail.com.br
        </b></p>
</footer>
    </>
  )
}

export default App
