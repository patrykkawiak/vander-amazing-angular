import { Injectable } from '@angular/core';
import { Post } from '../Types/Post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  postsChanged = new Subject<Post[]>();
  filterOption = new Subject<string>();

  posts: Post[] = [
    new Post(
      0,
      'Chłodzenie wodne, hit czy kit?',
      `Temat chłodzenia wodnego w komputerach staje się coraz bardziej popularny, przyciągając uwagę zarówno doświadczonych graczy, jak i początkujących entuzjastów. Ale czy chłodzenie wodne to naprawdę rewolucyjne rozwiązanie, czy może to tylko drogi kaprys? Dziś przyjrzymy się temu pytaniu bliżej.
      Pierwszą rzeczą, którą warto zaznaczyć, jest to, że chłodzenie wodne jest znacznie bardziej skuteczne niż tradycyjne chłodzenie powietrzem. To oznacza, że procesory i karty graficzne pracują na niższych temperaturach, co może przekładać się na wydajność i żywotność podzespołów. Jednak wydajność ma swoją cenę - zarówno dosłownie, jak i w przenośni. Chłodzenie wodne jest znacznie droższe od tradycyjnych rozwiązań, zarówno pod względem samego zestawu, jak i kosztów utrzymania. Musisz zapłacić za pompę, radiatory, wężownice, zbiorniki na płyn, i ewentualnie specjalne bloki chłodzące na procesor i kartę graficzną.   
      Kolejną rzeczą, którą należy wziąć pod uwagę, jest skomplikowana instalacja chłodzenia wodnego. Wymaga ona precyzyjnego zamocowania bloków chłodzących na podzespołach, podłączenia wszystkich elementów i starannej konserwacji. Nawet niewielkie wycieki lub błędy mogą prowadzić do poważnych uszkodzeń sprzętu. Dlatego chłodzenie wodne nie jest rozwiązaniem dla każdego użytkownika komputera.
      Jednak jeśli jesteś gotowy na wyzwanie, chłodzenie wodne może przynieść wiele korzyści. Jest cichsze niż tradycyjne chłodzenie powietrzem, co oznacza, że nie będziesz musiał słuchać hałasu wentylatorów pracujących na maksymalnych obrotach. Ponadto, estetyka chłodzenia wodnego jest często zachwycająca, z podświetlonymi wężownicami i efektownymi blokami chłodzącymi.
      Podsumowując, chłodzenie wodne to nie tylko kaprys dla entuzjastów, ale także skuteczne rozwiązanie, które może poprawić wydajność i estetykę twojego komputera. Jednak wiąże się z kosztami, zarówno finansowymi, jak i czasowymi, a jego instalacja i konserwacja mogą być wymagające. Dlatego, zanim zdecydujesz się na chłodzenie wodne, warto dokładnie zastanowić się, czy jest to odpowiednie rozwiązanie dla twoich potrzeb i budżetu.`,
      'https://images.pexels.com/photos/2225617/pexels-photo-2225617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      new Date('July 21, 2023')
    ),
    new Post(
      1,
      'Klawiatura mechaniczna a membranowa',
      `Klawiatura mechaniczna a membranowa - Która lepsza?

      Klawiatury są nieodzownym narzędziem pracy i rozrywki dla wielu z nas. Wybór odpowiedniego rodzaju klawiatury może znacząco wpłynąć na naszą wydajność, komfort i satysfakcję z korzystania z komputera. Dziś przyjrzymy się dwóm głównym typom klawiatur: mechanicznej i membranowej, porównując ich zalety i wady.
      Klawiatury mechaniczne są znane ze swojej wyjątkowej konstrukcji, która wykorzystuje osobne przełączniki pod każdym klawiszem. Każdy naciśnięty klawisz jest odczuwalny dzięki charakterystycznemu "klikowi" lub "clackowi". To daje użytkownikom pewność, że klawisz został naciśnięty, co jest przydatne zarówno w pisaniu, jak i grach. Mechaniczne klawiatury oferują również dłuższą żywotność, często przekraczającą 50 milionów naciśnięć na klawisz, oraz możliwość personalizacji poprzez wybór różnych rodzajów przełączników.
      Klawiatury membranowe, z drugiej strony, używają warstw membrany do rejestracji naciśnięć. Są tańsze w produkcji i zwykle cichsze w użyciu, co może być atutem w środowisku biurowym. Jednakże, są mniej wytrzymałe niż klawiatury mechaniczne i mają tendencję do zużywania się po około 5-10 milionach naciśnięć. Czułość klawiszy jest mniej precyzyjna, co może wpłynąć na wydajność w grach.
      Wreszcie, wybór między klawiaturą mechaniczną a membranową zależy od twoich osobistych preferencji i zastosowań. Jeśli jesteś graczem lub często piszesz dużo tekstu, mechaniczna klawiatura może być lepszym wyborem ze względu na jej trwałość i dokładność. Jeśli z kolei cenisz sobie ciszę i nie przeprowadzasz maratonów pisania, klawiatura membranowa może być bardziej odpowiednia i ekonomiczna.
      Podsumowując, wybór między klawiaturą mechaniczną a membranową to kwestia indywidualnych preferencji. Oba rodzaje klawiatur mają swoje zalety i wady, a ostateczna decyzja powinna zależeć od twoich potrzeb i budżetu. Niezależnie od wyboru, ważne jest, aby znaleźć klawiaturę, która zapewni ci komfort i satysfakcję podczas pracy i rozrywki.`,
      'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      new Date('July 17, 2023')
    ),
    new Post(
      2,
      'Ergonomiczne stanowisko',
      `W dzisiejszym świecie, w którym wiele godzin spędzamy przed komputerem, tworzenie ergonomicznego stanowiska pracy staje się kluczowe dla naszego zdrowia, komfortu i wydajności. Dlaczego to tak istotne i jakie kroki możemy podjąć, aby stworzyć ergonomiczne stanowisko?

      Ergonomia to nauka, która zajmuje się dostosowaniem środowiska pracy do potrzeb człowieka. Ergonomiczne stanowisko pracy ma na celu minimalizowanie napięcia mięśni, zapobieganie kontuzjom i przeciwdziałanie problemom zdrowotnym, takim jak ból pleców, ból szyi czy zespół cieśni nadgarstka. Jednocześnie wpływa pozytywnie na wydajność i komfort pracy.
      
      Oto kilka kluczowych zasad, które warto wziąć pod uwagę, tworząc ergonomiczne stanowisko:
      
      Regulowana krzesło biurowe: Wybierz krzesło, które można dostosować do swojego wzrostu i budowy ciała. Upewnij się, że masz odpowiednie wsparcie dla pleców i możliwość regulacji wysokości oraz kąta nachylenia siedziska.
      
      Ergonomiczny stół: Stół powinien umożliwiać swobodne rozłożenie rąk na klawiaturze i myszce oraz zapewniać miejsce na monitor w odpowiedniej wysokości.
      
      Monitor na odpowiedniej wysokości: Ekran monitora powinien znajdować się na wysokości oczu, co pomaga uniknąć nadmiernego skłonu głowy do przodu lub w dół. Możesz użyć podstawki pod monitor lub dostosować go za pomocą specjalnych uchwytów.
      
      Klawiatura i myszka: Wybierz klawiaturę i myszkę, które są wygodne dla Twoich dłoni. Klawiatura powinna być na tyle płaska, aby uniknąć nadmiernego wyginania nadgarstków.
      
      Oświetlenie: Upewnij się, że miejsce pracy jest dobrze oświetlone, aby nie obciążać wzroku. Unikaj odblasków na monitorze.
      
      Przerwy i ćwiczenia: Nie zapominaj o krótkich przerwach w pracy, podczas których możesz rozciągnąć ciało i oczy. Regularne ćwiczenia mogą pomóc w utrzymaniu kondycji fizycznej.
      
      Organizacja przestrzeni: Upewnij się, że wszystkie niezbędne przedmioty są łatwo dostępne, aby uniknąć nadmiernego napinania się i ciągłego wstawania.
      
      Kablowanie: Uporządkuj kable i przewody, aby uniknąć zamieszania i ryzyka potknięcia.
      
      Tworzenie ergonomicznego stanowiska pracy to inwestycja w Twoje zdrowie i komfort. Poprawa ergonomii może pomóc w zapobieganiu przewlekłym problemom zdrowotnym związanym z pracą przy komputerze, takim jak zespoły bólu kręgosłupa czy nadgarstka. Przy odpowiednim dostosowaniu stanowiska pracy, możemy zwiększyć wydajność, kreatywność i ogólny komfort naszej codziennej pracy. Pamiętaj, że nasze ciało jest naszym najważniejszym narzędziem, dlatego warto zadbać o jego odpowiednie warunki pracy.`,
      'https://images.pexels.com/photos/7858743/pexels-photo-7858743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      new Date(),
      true
    ),
    new Post(
      3,
      'Nowe Pady RGB!',
      `Świat gamingowych akcesoriów stale ewoluuje, dostarczając coraz to nowych rozwiązań, które mają na celu zwiększenie komfortu i wydajności graczy. Jednym z najnowszych trendów, który podbija rynek, są pady z oświetleniem RGB. Dlaczego są takie popularne i co sprawia, że są tak fascynujące?

      Pady, czyli kontrolery do gier, są kluczowym elementem wyposażenia każdego gracza konsolowego, a także tych, którzy preferują gry na PC. Tradycyjne pady były znane głównie ze swojej funkcjonalności i trwałości, ale dzisiaj producenci idą o krok dalej, dodając do nich efekty świetlne RGB. Co to oznacza w praktyce?
      
      Pierwszą i najbardziej oczywistą korzyścią płynącą z RGB pada jest aspekt wizualny. Dzięki wielu dostępnym kolorom i efektom oświetlenia, możemy dostosować swój pad do swojego stylu i preferencji. Niektóre pady pozwalają nawet na synchronizację z innymi akcesoriami RGB, takimi jak klawiatury czy myszki, co tworzy spójny, efektowny zestaw.
      
      Kolejnym atutem jest personalizacja. Wielu producentów umożliwia programowanie kolorów i efektów, co pozwala dostosować pad do konkretnej gry lub nawet wydarzenia w grze. Na przykład, możesz ustawić inny schemat kolorów dla strzelanek, a inny dla gier sportowych. To pozwala na jeszcze bardziej immersyjne doświadczenia podczas grania.`,
      'https://images.pexels.com/photos/596750/pexels-photo-596750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      new Date('July 11, 2023'),
      true
    ),
    new Post(
      4,
      'Znowu ten Minecraft?',
      `Gdy Minecraft zadebiutował w 2011 roku, niewielu spodziewało się, że stanie się jednym z najpopularniejszych tytułów w historii gier komputerowych. Teraz, po ponad dekadzie od premiery, pytanie "Znowu ten Minecraft?" nadal pozostaje aktualne. Dlaczego ta gra wciąż przyciąga miliony graczy na całym świecie?

      Nieskończona kreatywność: Jednym z największych atutów Minecrafta jest brak ograniczeń w tworzeniu. Gracze mogą kształtować świat z klocków, tworzyć budowle, mechanizmy, a nawet całe ekosystemy. Dzięki tej kreatywności, każda sesja gry to nieograniczone możliwości wyrażenia swojej wyobraźni.
      
      Współpraca i społeczność: Minecraft to gra, która sprzyja wspólnej zabawie. Serwery multiplayer pozwalają na budowanie wspólnych projektów, rywalizację lub przyjaźń w wirtualnym świecie. Społeczność gry jest ogromna i przyjazna, a dostępność modyfikacji daje możliwość dostosowania rozgrywki do własnych preferencji.
      
      Nostalgia: Dla wielu graczy, Minecraft to nie tylko gra - to wspomnienie dzieciństwa. Ci, którzy zaczynali przygodę z grą w młodszych latach, wciąż do niej wracają, łącząc się z emocjami z przeszłości.
      
      Edukacja: Minecraft znalazł swoje miejsce w edukacji. Szkoły wykorzystują tę grę do nauczania geometrii, programowania, historii i wielu innych przedmiotów. To narzędzie, które ucząc, dostarcza także zabawę.`,
      'https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      new Date('July 14, 2023')
    ),
    new Post(
      5,
      'Mercedes znowu zaskakuje!',
      `Sezon Formuły 1 2023 r. okazuje się być jednym z najbardziej emocjonujących w historii tego sportu. W centrum uwagi znów stoi ekipa Mercedesa, która tym razem zaskakuje nie tylko rywali, ale także fanów na całym świecie.

      Mercedes AMG Petronas Formula One Team przez ostatnią dekadę dominował w świecie Formuły 1. Drużyna pod wodzą Toto Wolffa i kierowców takich jak Lewis Hamilton czy Valtteri Bottas zdobyła siedem kolejnych tytułów mistrza świata konstruktorów. Jednak w sezonie 2023 coś się zmienia.
      
      Największym zaskoczeniem jest fakt, że Mercedes, po wielu latach dominacji, nie jest już zespołem, który wygrywa każdy wyścig. Inne ekipy, takie jak Red Bull Racing czy Ferrari, zaczęły doganiać Niemców i zdobywać cenne punkty. Sezon rozpoczął się od zdumiewających zwycięstw zespołu Ferrari, co z pewnością przykuło uwagę kibiców.`,
      'https://images6.alphacoders.com/121/1214058.png',
      new Date('July 25, 2023')
    ),
  ];

  getPosts() {
    return [...this.posts];
  }

  getFeaturedPosts() {
    return this.posts.filter((post) => post.isFeatured);
  }

  getPost(index: number) {
    return this.posts[index];
  }

  sortPost(value: string) {
    let posts = this.getPosts();
    if (value === 'oldest') {
      return posts.sort(
        (a, b) =>
          new Date(b.relaseDate).getTime() - new Date(a.relaseDate).getTime()
      );
    }
    if (value === 'newest') {
      return posts.sort(
        (a, b) =>
          new Date(a.relaseDate).getTime() - new Date(b.relaseDate).getTime()
      );
    }
    return this.posts;
  }
}
