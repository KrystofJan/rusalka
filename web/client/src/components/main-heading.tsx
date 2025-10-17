import figlet from 'figlet';
import standard from 'figlet/fonts/Standard';

figlet.parseFont('Standard', standard);

export default async function Heading(opts: { heading: string }) {
  const { heading } = opts;
  const headingText = await figlet.text(
    heading,
    {
      font: 'Bloody',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );
  return (
    <>
      <h1 className="hidden">heading</h1>
      <pre className="leading-none text-center">{headingText}</pre>
    </>
  );
}
