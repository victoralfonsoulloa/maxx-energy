import './MainContent.scss';
export default function MainContent() {
  return (
    <div className="main-wrapper">

      <div className='actionButt'>
      <img src="images/img1.jpeg" alt="Side Visual" className="leftside-img"/>
      <button className='butt'>Call to Action</button>
      </div>

      <main className="main">
        <h1 className='h1'>Main Content</h1>
        <p className='p1'>
          I'm baby polaroid next level yr meggings adaptogen, unicorn af hell
          of cray pitchfork butcher four loko. Williamsburg tilde cardigan
          hella austin succulents banjo PBR&B try-hard bespoke lyft meditation
          kitsch everyday carry 90's. Deep v wolf chambray succulents, synth
          selvage disrupt tonx mustache. Humblebrag health goth XOXO vegan,
          photo booth tilde pok pok pitchfork.
        </p>
        <p className='p1'>
          Cray umami quinoa mlkshk ramps affogato snackwave blackbird spyplane.
          Cronut seitan paleo, XOXO jean shorts tbh letterpress offal cloud
          bread disrupt single-origin coffee. Kitsch bitters bicycle rights
          vice stumptown chillwave. Pabst mixtape XOXO gorpcore. Mustache
          kickstarter intelligentsia pok pok tousled literally. Literally
          dreamcatcher bodega boys poke gochujang palo santo pinterest YOLO
          ugh. Organic iPhone portland kogi.
        </p>

        <p className='p1'>DIY bruh hot chicken, whatever iceland meggings wolf schlitz godard small batch post-ironic raw denim kinfolk vibecession cronut. 
          Before they sold out actually literally narwhal solarpunk retro franzen meggings sustainable offal cred adaptogen kombucha +1. 
          Gastropub beard lo-fi chillwave, paleo yes plz mukbang austin. Irony taiyaki you probably haven't heard of them, subway tile bitters direct trade edison bulb schlitz. 
          Photo booth bespoke fam fit. Godard austin ascot Brooklyn trust fund gatekeep hashtag XOXO af. 
          Cliche poutine everyday carry Brooklyn neutra.</p>
      </main>
    <img src='images/logo1.png' alt='logo' className='rightlogo'/>
      </div>
  );
}
