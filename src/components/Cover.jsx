// بيعرض صورة اللعبة. لو مفيش صورة بيعرض خلفية متدرجة بالألوان مكانها.
function Cover({ game, className = '' }) {
  const style = game.image
    ? undefined
    : { background: `linear-gradient(135deg, ${game.colors[0]}, ${game.colors[1]})` }

  return (
    <div className={`cover ${className}`} style={style}>
      {game.image ? <img src={game.image} alt={game.title} /> : <span>{game.title}</span>}
    </div>
  )
}

export default Cover
