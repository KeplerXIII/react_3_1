import './App.css'

function App() {


  
  function Stars ({ count }: {count: number}): React.ReactNode{

    function starJSX (key: number): JSX.Element {
      return  <li key={key}>
                <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
                    <path d="M0 0h18v18H0z" fill="none"/>
                </svg>
              </li>
    }

    if (count===0 || count>5) return

    return <ul className="card-body-stars u-clearfix">
             {Array.from({ length: count}, (_, index) => starJSX(index))}
           </ul>
  }

  return (
    <>
      <div className='film-card'>
        <Stars count={3}/>
      </div>
      <div className='film-card'>
        <Stars count={2}/>
      </div>
    </>
  )
}

export default App
