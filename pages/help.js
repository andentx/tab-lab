import Head from 'next/head';

import Layout from '../components/Layout';
import Title from '../components/Title';
import TextBox from '../components/TextBox';

export default function Help() {
  return (
    <Layout>
      <Head>
        <title>tab lab | help</title>
      </Head>

      <Title />
      <TextBox>
        <h2>help</h2>
        <p>
          <b>Print Safari</b>
          <br />
          Use this button to print from Safari browser
          <br />
          <br />
          <b>Print Chrome</b>
          <br />
          Use this button to print from Chrome browser
          <br />
          <br />
          <br />
          <br />
          <b>Number of Strings</b>
          <br />
          Set number of strings between 4 and 12
          <br />
          <br />
          <b>Frets / Measures</b>
          <br />
          Set number of vertical lines on each tab row. Set to <b>none</b> for plain tabs, or add lines for measures or frets to create scale charts
          <br />
          <br />
          <b>Number of Rows</b>
          <br />
          Set number of tab rows
          <br />
          <br />
          <b>Adjust Horizontal Scale</b>
          <br />
          Adjust width of all tab rows
          <br />
          <br />
          <b>Adjust Vertical Scale</b>
          <br />
          Adjust height of all tab rows
          <br />
          <br />
          <b>Adjust Horizontal Offset</b>
          <br />
          Adjust all tab rows left or right. Useful to make room for 3-hole punch
          <br />
          <br />
          <b>Adjust Space Between Rows</b>
          <br />
          Adjust space between all tab rows
          <br />
          <br />
          <b>Page Header</b>
          <br />
          Show or hide header at top of page
          <br />
          <br />
          <b>Page Header Height</b>
          <br />
          Adjust height of page header
          <br />
          <br />
          <b>Adjust Line Size</b>
          <br />
          Adjust thickness of all tab lines
          <br />
          <br />
          <br />
        </p>
      </TextBox>
    </Layout>
  );
}
