// === TWOJE FISZKI I QUIZY ===
const deckDuty = {
  id:'duty',title:'Obowiązki dyżurnego',cards:[
    {question:'Kto jest wyznaczany na dyżurnego pododdziału?',answer:'Żołnierz z korpusu podoficerów lub szeregowych (marynarzy).',quote:'329. Na dyżurnego pododdziału wyznacza się żołnierza z korpusu podoficerów lub szeregowych (marynarzy).'},
    {question:'Komu podlega dyżurny pododdziału?',answer:'Dowódcy pododdziału i służbowo oficerowi dyżurnemu jednostki.',quote:'330. Dyżurny pododdziału podlega dowódcy pododdziału, a pod względem służby – oficerowi dyżurnemu jednostki (instytucji) wojskowej.'},
    {question:'Czy dyżurny ma prawo wydawać rozkazy?',answer:'Tak, w zakresie obowiązków z instrukcji pełnienia służby.',quote:'331. Dyżurny pododdziału ma prawo wydawania rozkazów wynikających z obowiązków określonych w instrukcji pełnienia służby.'},
    {question:'Jakie są zadania dyżurnego w zakresie gotowości?',answer:'Realizacja zadań gotowości i zarządzania kryzysowego, nadzór nad magazynem broni, wydawanie sprzętu, nadzór nad porządkiem dnia, sprawdzanie wyglądu żołnierzy.',quote:`332. Do zakresu działania dyżurnego pododdziału należy w szczególności:
a. realizacja zadań osiągania gotowości do podjęcia działań w pododdziale zgodnie z harmonogramem,
b. realizacja zadań w zakresie zarządzania kryzysowego w pododdziale zgodnie z harmonogramem,
c. nadzór nad pododdziałowym magazynem broni,
d. wydawanie i przyjmowanie sprzętu wojskowego z pododdziałowego magazynu broni oraz odnotowanie powyższego faktu w dokumentacji określonej odrębnymi przepisami,
e. nadzór nad przestrzeganiem porządku dnia jednostki (instytucji) wojskowej w pododdziale,
f. sprawdzenie wyglądu zewnętrznego umundurowanych żołnierzy wychodzących poza rejon zakwaterowania, a w przypadku stwierdzenia nieprawidłowości nakazanie ich usunięcia.`},
    {question:'Co dyżurny robi po odprawie służb?',answer:'Przejmuje dokumentację i sprawdza zabezpieczenie magazynu broni.',quote:'333. Po odprawie służb dyżurny pododdziału obejmujący służbę przejmuje dokumentację zgodnie z wykazem dokumentów, sprawdza zabezpieczenie pododdziałowego magazynu broni.'},
    {question:'Komu dyżurny melduje fakt zdania/objęcia służby?',answer:'Dowódcy pododdziału i oficerowi dyżurnemu jednostki.',quote:'334. Dyżurny pododdziału melduje dowódcy pododdziału i oficerowi dyżurnemu jednostki (instytucji) wojskowej fakt zdania lub objęcia służby.'},
    {question:'Co jeśli służba zdawana/obejmowana jest po godzinach służbowych?',answer:'Melduje oficerowi dyżurnemu jednostki.',quote:'335. Jeżeli zdanie (objęcie) służby następuje po godzinach służbowych, dyżurny pododdziału melduje ten fakt oficerowi dyżurnemu jednostki (instytucji) wojskowej.'},
    {question:'Kiedy dyżurny składa meldunek pomocnikowi oficera dyżurnego?',answer:'Jeżeli pomocnik oficera dyżurnego ma równy lub wyższy stopień wojskowy.',quote:'336. Dyżurny pododdziału składa meldunek pomocnikowi oficera dyżurnego jednostki (instytucji) wojskowej jeżeli pomocnik oficera dyżurnego jednostki (instytucji) wojskowej posiada równy lub wyższy stopień wojskowy.'},
    {question:'Komu podlega zastępca dyżurnego?',answer:'Dyżurnemu pododdziału.',quote:'337. Dyżurnemu pododdziału podlega zastępca dyżurnego pododdziału.'},
    {question:'Kto może być zastępcą dyżurnego pododdziału?',answer:'Żołnierz z korpusu podoficerów lub szeregowych w stopniu równym bądź niższym.',quote:'338. Na zastępcę dyżurnego pododdziału wyznacza się żołnierza z korpusu podoficerów lub szeregowych (marynarzy) w stopniu wojskowym równym bądź niższym od dyżurnego pododdziału.'},
    {question:'Jakie obowiązki ma zastępca dyżurnego?',answer:'Przyjęcie sprzętu, dbanie o czystość, wykonywanie rozkazów dyżurnego, pełnienie jego obowiązków w razie nieobecności.',quote:`340. Do zakresu działania zastępcy dyżurnego pododdziału w szczególności należy:
a. przyjęcie sprzętu zgodnie ze spisem wyposażenia,
b. dbanie o czystość w pododdziale.
c. wykonywanie rozkazów dyżurnego pododdziału zgodnie z określonym zakresem działania oraz przysługującymi mu uprawnieniami,
d. pełnienie obowiązków dyżurnego pododdziału w razie jego nieobecności lub niedyspozycji.`}
  ]
};

const deckFirearm = {
  id:'firearm',title:'Konieczność użycia broni palnej',cards:[
    {question:'Kiedy ogólnie można użyć broni palnej?',answer:'Gdy zaistnieje co najmniej jeden z przypadków wskazanych w przepisach.',quote:`Broni palnej można użyć, gdy zaistnieje co najmniej jeden z następujących przypadków:`},
    {question:'Na co pozwala punkt 1 lit. a?',answer:'Odparcie bezpośredniego, bezprawnego zamachu na życie, zdrowie lub wolność uprawnionego lub innej osoby.',quote:`1) konieczność odparcia bezpośredniego, bezprawnego zamachu na:
a) życie, zdrowie lub wolność uprawnionego lub innej osoby albo konieczność przeciwdziałania czynnościom zmierzającym bezpośrednio do takiego zamachu,`},
    {question:'Na co pozwala punkt 1 lit. b?',answer:'Ochronę ważnych obiektów, urządzeń lub obszarów.',quote:`b) ważne obiekty, urządzenia lub obszary albo konieczność przeciwdziałania czynnościom zmierzającym bezpośrednio do takiego zamachu,`},
    {question:'Kiedy mienie uzasadnia użycie broni (pkt 1 c)?',answer:'Gdy stwarza jednocześnie bezpośrednie zagrożenie życia, zdrowia lub wolności.',quote:`c) mienie, który stwarza jednocześnie bezpośrednie zagrożenie życia, zdrowia lub wolności uprawnionego lub innej osoby, albo konieczność przeciwdziałania czynnościom zmierzającym bezpośrednio do takiego zamachu,`},
    {question:'Jakie szczególne zagrożenie wymienia pkt 1 d?',answer:'Naruszalność granicy państwowej przy wymuszeniu przekroczenia granicy przy użyciu pojazdu, broni palnej lub innego niebezpiecznego przedmiotu.',quote:`d) nienaruszalność granicy państwowej przez osobę, która wymusza przekroczenie granicy państwowej przy użyciu pojazdu, broni palnej lub innego niebezpiecznego przedmiotu,`},
    {question:'Co mówi pkt 1 e?',answer:'Bezpieczeństwo konwoju lub doprowadzenia.',quote:`e) bezpieczeństwo konwoju lub doprowadzenia;`},
    {question:'Kiedy można użyć broni w celu przeciwstawienia się osobie?',answer:'Gdy nie podporządkowuje się wezwaniu do porzucenia broni lub próbuje odebrać broń uprawnionemu.',quote:`2) konieczność przeciwstawienia się osobie:
a) niepodporządkowującej się wezwaniu do natychmiastowego porzucenia broni, materiału wybuchowego lub innego niebezpiecznego przedmiotu, którego użycie może zagrozić życiu, zdrowiu lub wolności uprawnionego lub innej osoby,
b) która usiłuje bezprawnie odebrać broń palną uprawnionemu lub innej osobie uprawnionej do jej posiadania;`},
    {question:'Jaki jest powód użycia broni w czasie pościgu?',answer:'Bezpośredni pościg za osobą wobec której użycie broni było dopuszczalne lub istnieje podejrzenie poważnego przestępstwa.',quote:`3) bezpośredni pościg za osobą, wobec której:
a) użycie broni palnej było dopuszczalne w przypadkach określonych w pkt 1 lit. a–d i pkt 2,
b) istnieje uzasadnione podejrzenie, że popełniła przestępstwo, o którym mowa w art. 115 § 20, art. 148, art. 156 § 1, art. 163–165, art. 197, art. 252 i art. 280–282 ustawy z dnia 6 czerwca 1997 r. – Kodeks karny;`},
    {question:'Kiedy można użyć broni w celu ujęcia osoby (pkt 4)?',answer:'Gdy użycie broni było dopuszczalne wcześniej lub istnieje uzasadnione podejrzenie popełnienia katalogowego przestępstwa, dokonuje zamachu lub schroniła się w miejscu trudno dostępnym.',quote:`4) konieczność:
a) ujęcia osoby:
– wobec której użycie broni palnej było dopuszczalne w przypadkach określonych w pkt 1 lit. a–d i pkt 2,
– wobec której istnieje uzasadnione podejrzenie, że popełniła przestępstwo, o którym mowa w art. 115 § 20, art. 148, art. 156 § 1, art. 163–165, art. 197, art. 252 i art. 280–282 ustawy z dnia 6 czerwca 1997 r. – Kodeks karny,
– dokonującej zamachu, o którym mowa w pkt 1 lit. d lub e,
– jeżeli schroniła się w miejscu trudno dostępnym, a z okoliczności zdarzenia wynika, że może użyć broni palnej lub innego niebezpiecznego przedmiotu,`},
    {question:'Kiedy można użyć broni w celu ujęcia lub udaremnienia ucieczki osoby zatrzymanej (pkt 4b)?',answer:'Jeżeli ucieczka stwarza zagrożenie życia/zdrowia, istnieje podejrzenie użycia niebezpiecznych przedmiotów lub powiązanie z katalogiem przestępstw.',quote:`b) ujęcia lub udaremnienia ucieczki osoby zatrzymanej, tymczasowo aresztowanej lub odbywającej karę pozbawienia wolności, jeżeli:
– ucieczka tej osoby stwarza zagrożenie życia lub zdrowia uprawnionego lub innej osoby,
– istnieje uzasadnione podejrzenie, że osoba ta może użyć materiałów wybuchowych, broni palnej lub innego niebezpiecznego przedmiotu,
– pozbawienie wolności nastąpiło w związku z uzasadnionym podejrzeniem lub stwierdzeniem popełnienia przestępstwa, o którym mowa w art. 115 § 20, art. 148, art. 156 § 1, art. 163–165, art. 197, art. 252 i art. 280–282 ustawy z dnia 6 czerwca 1997 r. – Kodeks karny,`},
    {question:'Na co pozwala punkt 5?',answer:'Udaremnienie ucieczki osoby pozbawionej wolności z aresztu, zakładu karnego lub podczas konwoju oraz pościg za tą osobą.',quote:`5) konieczność udaremnienia ucieczki osoby pozbawionej wolności z aresztu śledczego lub zakładu karnego oraz osoby konwojowanej lub doprowadzanej, a także pościg za tą osobą.`}
  ]
};

// quizy
const quizDy = [
  {q:'Kto może być dyżurnym pododdziału?',options:['Oficer','Żołnierz z korpusu podoficerów lub szeregowych','Cywil'],correct:1},
  {q:'Komu podlega dyżurny pododdziału?',options:['Dowódcy pododdziału i oficerowi dyżurnemu','Dowódcy jednostki','Żadnemu'],correct:0},
  {q:'Czy dyżurny pododdziału ma prawo wydawania rozkazów?',options:['Nie','Tak, wynikających z obowiązków','Tylko oficer'],correct:1},
  {q:'Wymień jedno z zadań dyżurnego dotyczące gotowości.',options:['Nadzór nad magazynem broni','Wydawanie przepustek','Prowadzenie kasy'],correct:0},
  {q:'Komu melduje dyżurny fakt objęcia służby?',options:['Tylko dowódcy jednostki','Dowódcy pododdziału i oficerowi dyżurnemu','Sekretarzowi'],correct:1},
  {q:'Kiedy dyżurny melduje pomocnikowi oficera dyżurnego?',options:['Zawsze','Gdy pomocnik ma równy lub wyższy stopień wojskowy','Nigdy'],correct:1},
  {q:'Kto podlega dyżurnemu pododdziału?',options:['Zastępca dyżurnego','Oficer dyżurny','Dowódca kompanii'],correct:0},
  {q:'Jakie obowiązki ma zastępca dyżurnego?',options:['Tylko czystość','Pełni obowiązki dyżurnego w razie jego nieobecności','Brak obowiązków'],correct:1}
];

const quizBr = [
  {q:'Kiedy można użyć broni palnej?',options:['Zawsze','Gdy zaistnieje co najmniej jeden przypadek wskazany w przepisach','Nigdy'],correct:1},
  {q:'Na co pozwala punkt 1 lit. d?',options:['Ochronę obiektów','Naruszalność granicy państwowej przy wymuszeniu przekroczenia granicy','Bezpieczeństwo konwoju'],correct:1},
  {q:'Co wymienia punkt 1 lit. a?',options:['Odparcie zamachu na życie/zdrowie/wolność','Zatrzymanie mienia','Kontrola przepustek'],correct:0},
  {q:'Kiedy można użyć broni wobec osoby nieporzucającej broni?',options:['Nigdy','Tylko w czasie wojny','Przy konieczności przeciwstawienia się osobie'],correct:2},
  {q:'Pościg za jaką osobą uzasadnia użycie broni?',options:['Za każdą','Za osobą wobec której użycie broni było dopuszczalne lub istnieje podejrzenie poważnego przestępstwa','Nigdy'],correct:1},
  {q:'Czego dotyczy punkt 4 a?',options:['Ujęcia osoby wobec której użycie broni było dopuszczalne','Nadzoru nad mieniem','Przepustek'],correct:0},
  {q:'Kiedy można udaremnić ucieczkę osoby pozbawionej wolności używając broni?',options:['Zawsze','Gdy ucieczka stwarza zagrożenie życia/zdrowia lub istnieje podejrzenie użycia materiałów wybuchowych','Nigdy'],correct:1},
  {q:'Na co pozwala punkt 5?',options:['Udaremnienie ucieczki z aresztu/konwoju','Zatrzymanie mienia','Przegląd broni'],correct:0}

];
