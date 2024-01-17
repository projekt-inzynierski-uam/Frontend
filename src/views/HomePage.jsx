import { Link } from 'react-router-dom'
import '../styles/HomePage.css'

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
            W dzisiejszym szybkim tempie życia, utrzymanie porządku w zadaniach i terminach może być trudne.
             Brak systematycznego podejścia do zarządzania czasem prowadzi do zgubienia priorytetów, co z kolei wpływa na skuteczność i spokój psychiczny.
            </span>
            <div className="e1_79">
            </div>
            <span className="e1_82">01</span>
            <div className="e1_84"></div>
          </div>
          
        </div>
        <div className="e1_36">
          <div className="e1_39">
            <span className="e1_37">Uporządkuj swoją pracę i życie</span>
            <span className="e1_40">Menadżer zadań JAK ŻADEN INNY</span>
            <div className="e1_41"></div>
          </div>
          <div className="e1_49">
          </div>
        </div>
        <div className="e1_3">
          <div className="e1_15">
            <Link to={Paths.LOGIN}>
              <span className="e1_16">Zaloguj</span>
              <div className="e1_17">
                <div className="e1_31"></div>
              </div>
            </Link>
          </div>
          <span className="e1_33">O Nas</span>
          <span className="e1_14">Sortorio</span>
        </div>
        <div className="e1_55">
        </div>
      </div>
    </>
  )
}

export default HomePage
