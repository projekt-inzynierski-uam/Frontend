import '../styles/HomePage.css'
import { Link } from 'react-router-dom'
import { Paths } from '../routes/paths'

const HomePage = () => {
  return (
    <>
      <div className="e1_2">
        <div className="e1_43">
          <div className="e1_46"></div>
          <div className="e1_42"></div>
          <div className="e1_45"></div>
          <div className="e1_152"></div>
        </div>
        <div className="e1_48">
          <div className="e1_122">
            <div className="e1_123">
              <span className="e1_124">WIĘCEJ NIZ KALENDARZ</span>
              <div className="e1_125"></div>
            </div>
            <span className="e1_126">Potrzebujesz motywacji?</span>
            <span className="e1_127">
              Ustawiaj i otrzymuj punty za wykonywanie zadań, dzięki czemu zostaniesz zmotywowany do
              dalszego działania.
            </span>
            <div className="e1_128">
              <span className="e1_129">więcej</span>
              <div className="e1_130"></div>
            </div>
            <span className="e1_133">03</span>
            <div className="e1_132"></div>
          </div>
          <div className="e1_85">
            <div className="e1_86">
              <span className="e1_87">Pełen spokój</span>
              <div className="e1_88"></div>
            </div>
            <span className="e1_89">Osiągnij spokój, którego od dawna Ci brakuje.</span>
            <span className="e1_90">
              Twoje listy zadań do wykonania są automatycznie sortowane w widokach Dziś i
              Nadchodzące. Możesz też stosować własne opcje wyświetlania, aby jeszcze łatwiej skupić
              się na tym, co najważniejsze.
            </span>
            <div className="e1_91">
              <span className="e1_92">więcej</span>
              <div className="e1_93"></div>
            </div>
            <span className="e1_99">02</span>
            <div className="e1_98"></div>
          </div>
          <div className="e1_73">
            <div className="e1_74">
              <span className="e1_75">ZACZNYNANIE</span>
              <div className="e1_76"></div>
            </div>
            <span className="e1_77">Dodaj swoje zadania. Zorganizuj swoje życie.</span>
            <span className="e1_78">
              Błyskawicznie dodawaj zadania takie jak: „Przejrzeć e-maile z pracy codziennie o
              10:00” do swojej listy zadań, używając języka naturalnego, dzięki zaawansowanym
              funkcjom rozpoznawania dat.
            </span>
            <div className="e1_79">
              <span className="e1_80">więcej</span>
              <div className="e1_81"></div>
            </div>
            <span className="e1_82">01</span>
            <div className="e1_84"></div>
          </div>
          <div className="e1_134">
            <span className="e1_135">
              Już dzisiaj zoorganizuj swoje życie i czerp korzyści z uporzątkowanego dnia.
            </span>
            <div className="e1_136">
              <span className="e1_137">Więcej na naszym Blogu</span>
              <span className="e1_138">O Sortorio</span>
              <span className="e1_139">Twórcy</span>
              <span className="e1_140">Napisz dla nas</span>
              <span className="e1_141">Kontakt</span>
              <span className="e1_142">Polityka Prywatności</span>
            </div>
            <div className="e1_143">
              <span className="e1_144">Wiecej o Sortorio</span>
              <span className="e1_145">Drużyna</span>
              <span className="e1_146">Praca</span>
              <span className="e1_147">Prasa</span>
            </div>
            <span className="e1_148">Copyright 2019 Sortorio, Inc. Terms & Privacy</span>
          </div>
        </div>
        <div className="e1_36">
          <div className="e1_39">
            <span className="e1_37">Uporządkuj swoją pracę i życie</span>
            <span className="e1_40">Menadżer zadań JAK ŻADEN INNY</span>
            <div className="e1_41"></div>
          </div>
          <div className="e1_49">
            <span className="e1_50">zjedź niżej</span>
            <div className="e1_54"></div>
          </div>
        </div>
        <div className="e1_3">
          <div className="e1_15">
            <Link to={Paths.LOGIN}>
              <span className="e1_16">Konto</span>
              <div className="e1_17">
                <div className="e1_31"></div>
              </div>
            </Link>
          </div>
          <span className="e1_33">O Nas</span>
          <span className="e1_14">Sortorio</span>
        </div>
        <div className="e1_55">
          <span className="e1_58">Followuj nas</span>
          <div className="e1_60"></div>
          <div className="e1_62"></div>
        </div>
        <div className="e1_63">
          <div className="e1_64">
            <div className="e1_65">
              <span className="e1_66">Start</span>
              <span className="e1_67">01</span>
              <span className="e1_68">02</span>
              <span className="e1_69">03</span>
            </div>
          </div>
          <div className="e1_70">
            <div className="e1_71"></div>
            <div className="e1_72"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
