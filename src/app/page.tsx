import Exercise from './Exercise';

const rows: number[] = [];
for(let i = 0; i < 20; i++) {
  rows.push(i);
}

function Column() {
  return (
    <div style={{
      display: 'inline-block',
      marginRight: '3rem'
    }}>
      {
        rows.map(row => (<Exercise key={row} />))
      }
    </div>
  )
}

function Header() {
  return (
    <div style={{marginBottom: '3rem'}}>
      <span style={{margin: '2rem'}}>姓名: __________</span>
      <span style={{margin: '2rem'}}>日期: __________</span>
      <span style={{margin: '2rem'}}>时间: __________</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
    </>
  )
}
