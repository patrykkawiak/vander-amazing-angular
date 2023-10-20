import { Injectable } from '@angular/core';
import { ShopItem } from '../Types/ShopItem.model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  shopItems: ShopItem[] = [
    {
      id: 0,
      name: 'Mysz Razer DeathAdder V2',
      price: 460.89,
      category: 'mouse',
      producentId: 'RZ01-03350100-R3G1',
      description:
        'Z ponad 10 milionami sprzedanych Razer DeathAdders, najbardziej udana mysz do gier wszechczasów rezygnuje z przewodu, zapewniając wygodę bez ograniczeń. Wszyscy witają Razer DeathAdder V2 Pro - bezprzewodową, ergonomiczną mysz do gier, która zapoczątkowuje nowe panowanie dominacji.',
      image: 'assets/images/Shop/Razer_mouse.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 1,
      name: 'HyperX Pulsefire Dart',
      price: 389.92,
      category: 'mouse',
      producentId: '4P5Q4AA',
      description:
        'HyperX Pulsefire Dart™ to mysz gamingowa wyposażona w niezawodne połączenie bezprzewodowe 2,4GHz. Zdziwisz się, dlaczego tak długo byłeś uwiązany przewodem! Dołączony moduł łączności bezprzewodowej umożliwia rozszerzenie zasięgu połączenia ze stacjonarnym komputerem PC',
      image: 'assets/images/Shop/HyperX_mouse.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 2,
      name: 'Asus ROG Gladius II',
      price: 429.22,
      category: 'mouse',
      producentId: '90MP00U1-B0UA00',
      description:
        'Mysz ROG Gladius II Origin wyróżnia się ekskluzywną konstrukcją gniazda przełącznika (push-fit), która umożliwia Ci łatwą wymianę przełączników w celu dopasowania poziomu oporu kliknięć. Możliwość wymiany zużytych lub uszkodzonych przełączników wydłuża także żywotność Twojej myszy.  ',
      image: 'assets/images/Shop/Asus_mouse.png',
      isAvailable: false,
      isGuarantee: true,
      isBestseller: true,
    },
    {
      id: 3,
      name: 'Logitech G502 X',
      price: 199.99,
      category: 'mouse',
      producentId: '910-006172',
      description:
        'Myszka gamingowa Logitech G502 Hero to już niemal legenda w środowisku e-sportowym. Przyszedł jednak czas na odświeżenie konstrukcji i zaprezentowanie modelu G502 X Plus. To zupełnie nowy standard, który został oparty na sprawdzonych rozwiązaniach.',
      image: 'assets/images/Shop/Logitech_mouse.png',
      isAvailable: true,
      isGuarantee: false,
    },
    {
      id: 4,
      name: 'SteelSeries Arctis Nova 7',
      price: 789,
      category: 'headphones',
      producentId: '61553',
      description:
        'SteelSeries Arctis Nova 7 to wspaniałe słuchawki, które stanowią następcę wielokrotnie nagradzanych modeli Arctis 7, 7+ i 9. Ten zestaw słuchawkowy łączy gamingowy styl oraz wyjątkowy komfort.',
      image: 'assets/images/Shop/StealSeries_head.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 5,
      name: 'HyperX Cloud Alpha S ',
      price: 378.39,
      category: 'headphones',
      producentId: '4P5L3AA',
      description:
        'Model Cloud Alpha od HyperX jest znany wielu graczom, którzy dbają o najlepszy sprzęt do gamingu. Pora na nową odsłonę tego, co znane! Słuchawki HyperX Cloud Alpha S to udoskonalona wersja, która wykazuje się nie tylko równie dobrymi parametrami technicznymi',
      image: 'assets/images/Shop/HyperX_head.png',
      isAvailable: true,
      isGuarantee: false,
      isBestseller: true,
    },
    {
      id: 6,
      name: 'Sharkoon Skiller',
      price: 109,
      category: 'headphones',
      producentId: '4044951018284',
      description:
        'Wbudowane 40-milimetrowe przetworniki SKILLER SGH1 są mocno zmiksowane, dzięki czemu dźwięki z gry są szczególnie dobrze dostarczane. Mikrofon jest zoptymalizowany pod kątem komunikacji zespołowej i można go zginać i odłączać.',
      image: 'assets/images/Shop/noname_head.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 7,
      name: 'Steel Series W550',
      price: 299.99,
      category: 'headphones',
      producentId: 'R4-04SG5101D3-82841',
      description:
        'Wbudowane przetworniki o średnicy 30 mm w słuchawkach zapewniają doskonałą jakość dźwięku podczas rozgrywki. Dzięki starannie zaprojektowanemu mikrofonowi, komunikacja zespołowa staje się jeszcze bardziej efektywna,',
      image: 'assets/images/Bestsellers/headphones2.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 8,
      name: 'Sharkoon Skiller',
      price: 323,
      category: 'keyboard',
      producentId: 'SGK3 ',
      description:
        'SKILLER SGK3 przygotuje Cię na wszystkie wyzwania, za pomocą szybko reagującym przełącznikom Kailh. Układ jest celowo zwarty, ale jednocześnie kompleksowy. Dlatego niezależnie od tego, czy klawiatura jest używana do gier.',
      image: 'assets/images/Shop/Sharkoon_key.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 9,
      name: 'Genesis Thor 303',
      price: 287.04,
      category: 'keyboard',
      producentId: 'NKG-1879',
      description:
        'Doceniasz walory klawiatur mechanicznych, jednak preferujesz cichszą pracę klawiszy? Dzięki zastosowaniu Outemu Peach Silent udało nam się stworzyć model generujący dźwięk cichszy o 30% w porównaniu do tradycyjnych przełączników Outemu Brown. Nocne sesje gamingowe',
      image: 'assets/images/Shop/Genesis_key.png',
      isAvailable: false,
      isGuarantee: true,
    },
    {
      id: 10,
      name: 'Logitech G213',
      price: 213,
      category: 'keyboard',
      producentId: '920-008093',
      description:
        'Każda z zalet sprawia, że zwycięstwo staje się prostsze niż kiedykolwiek! Granie w ulubione tytuły nigdy nie było tak precyzyjne i wygodne. Klawiatura gamingowa Logitech G213 Prodigy to must-have na biurku każdego gracza!',
      image: 'assets/images/Shop/Logitech_key.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 11,
      name: 'PREYON Brown Blitz',
      price: 149.99,
      category: 'keyboard',
      producentId: 'PBRBC87B',
      description:
        'Dzięki PREYON Brown Blitz Claw już nigdy nie będziesz musiał zmieniać urządzenia w zależności od zadań, które musisz wykonać. Brązowe przełączniki w klawiaturze są uniwersalne – sprawdzą się zarówno dla tych, którzy profesjonalnie piszą, jak i dla graczy.',
      image: 'assets/images/Shop/Preyon_key.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 12,
      name: 'Corsair iCUE 4000X',
      price: 500,
      category: 'pc',
      producentId: 'CC-9011204-WW',
      description:
        'Obudowa CORSAIR iCUE 4000X RGB to szczególnie atrakcyjna, konfigurowalna obudowa ATX mid-tower ze szkła hartowanego z wygodnym prowadzeniem przewodów i wyjątkowym układem chłodzenia z dodanymi trzema wentylatorami CORSAIR AirGuide RGB.',
      image: 'assets/images/Shop/Corsair_pc.png',
      isAvailable: false,
      isGuarantee: true,
    },
    {
      id: 13,
      name: 'Pure Base 500DX',
      price: 477.57,
      category: 'pc',
      producentId: 'BGW37',
      description:
        'Dla wszystkich, którzy dążą do maksymalnej wydajności, a zwłaszcza systemów chłodzonych wodą, Pure Base 500DX Black z maksymalnie przepuszczającą powietrze przednią i górną pokrywą jest właściwym wyborem. Filtry przeciwkurze są w zestawie!',
      image: 'assets/images/Shop/bequiet_pc.png',
      isAvailable: true,
      isGuarantee: true,
    },
    {
      id: 14,
      name: 'Endorfy Signum 300',
      price: 259.99,
      category: 'pc',
      producentId: 'EY2A006',
      description:
        'Endorfy Signum 300 ARGB to niewielka obudowa ze szklanym bokiem, który kozacko eksponuje wnętrze. Zmieścisz w niej wszystkie potrzebne komponenty, a wieczorem podświetlisz je tęczową poświatą – na start dajemy Ci aż cztery wentylatory',
      image: 'assets/images/Shop/Endorfy_pc.png',
      isAvailable: true,
      isGuarantee: false,
      isBestseller: true,
    },
    {
      id: 15,
      name: 'Krux Leda',
      price: 348.85,
      category: 'pc',
      producentId: 'KRX0007',
      description:
        'Kiedy zbliżasz się do swojego stanowiska, co widzisz jako pierwsze? Monitor i skrzynkę. Buda na twojego pieca to jeden z najważniejszych elementów wystroju stanowiska prawdziwego gracza. Jest eksponatem właściciela i wywołuje pożądanie wśród ludzi.',
      image: 'assets/images/Bestsellers/krux.png',
      isAvailable: true,
      isGuarantee: true,
    },
  ];

  constructor() {}

  getShopItems() {
    return [...this.shopItems];
  }

  getShopItem(index: number) {
    return this.shopItems[index];
  }

  getBestsellers() {
    return this.shopItems.filter((item) => item.isBestseller);
  }

  generateRandomItem() {
    return Math.floor(Math.random() * this.shopItems.length);
  }

  getRandomItems() {
    const randomItems: ShopItem[] = [];
    const randomNumbers: number[] = [];
    for (let i = 0; i < 4; i++) {
      const number = this.generateRandomItem();
      if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
        randomItems.push(this.shopItems[number]);
      } else {
        if (randomItems.length < 4) {
          const regeneratedNumber = this.generateRandomItem();
          randomItems.push(this.shopItems[regeneratedNumber]);
          console.log('siema');
        }
      }
    }
    return randomItems;
  }
}
