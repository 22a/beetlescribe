import Card from 'react-bootstrap/Card'

export default function UnitBox({ blink = false, onClick, unit }) {
  if (!blink) {
    return (
      <Card onClick={onClick} style={{ width: 'rem18' }}>
        <Card.Body>
          <Card.Title>{unit.name}</Card.Title>
          <Card.Text>{unit.costs?.[0].value || ''}</Card.Text>
        </Card.Body>
      </Card>
    )
  }

  return (
    <blink>
      <div id="little-cube">
        <Card className="face front" onClick={onClick} style={{}}>
          <blink>
            <Card.Body>
              <Card.Title>{unit.name}</Card.Title>
              <Card.Text>{unit.costs?.[0].value || ''}</Card.Text>
            </Card.Body>
          </blink>
        </Card>
        <div className="face back blink2">2</div>
        <div className="face right blink2">3</div>
        <div className="face left blink2">4</div>
        <div className="face top blink2">5</div>
        <div className="face bottom blink2">6</div>
      </div>
    </blink>
  )
}
