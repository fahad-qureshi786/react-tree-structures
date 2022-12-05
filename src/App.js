import {AnimatedTree, Tree} from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'

const data = {
    children: [
        {
            name: 'Hello    ',
            children: [
                {
                    name: 'Hello    '
                },
                {
                    name: 'Hello    '
                }
            ]
        },
        {
            name: 'Hello    ', children: [
                {
                    name: 'Hello    '
                },
                {
                    name: 'Hello    '
                }
            ]
        },
        {
            name: 'Child Two    ', children: [
                {
                    name: 'Hello    '
                },
                {
                    name: 'Hello    '
                }
            ]
        }]
};

function App() {
    return (<div>
        {/*Right to Left Tree based Structures*/}
        <h1>Simple Trees</h1>
        <AnimatedTree
            direction={"rtl"}
            data={data}
            nodeProps={{
                points: '10,0,12.351141009169893,6.76393202250021,19.510565162951536,6.9098300562505255,13.804226065180615,11.23606797749979,15.877852522924734,18.090169943749473,10,14,4.12214747707527,18.090169943749473,6.195773934819385,11.23606797749979,0.4894348370484636,6.909830056250527,7.648858990830107,6.76393202250021',
                transform: 'translate(-10,-10)'
            }}
            nodeShape="polygon"
            height={400}
            width={400}/>
        <br/>
        <hr/>
        <AnimatedTree
            direction={"rtl"}
            data={data}
            nodeProps={{
                points: '10,0,12.351141009169893,6.76393202250021,19.510565162951536,6.9098300562505255,13.804226065180615,11.23606797749979,15.877852522924734,18.090169943749473,10,14,4.12214747707527,18.090169943749473,6.195773934819385,11.23606797749979,0.4894348370484636,6.909830056250527,7.648858990830107,6.76393202250021',
                transform: 'translate(-10,-10)'
            }}
            nodeShape="polygon"
            height={400}
            width={400}/>


        <hr/>
        <h1>Rectangle based Tree</h1>

        <Tree
            data={{
                children: [
                    {
                        label: <><rect height="18" width="7rem" y="-15"/><text dx="2">JSX</text></>,
                        name: 'Child One',
                        children: [
                            {
                                label: <><text dx="2">JSX</text><rect height="18" width="7rem" y="-15"/></>,
                                name: 'Child One'
                            },
                            {
                                label: <><text dx="2">JSX</text><rect height="18" width="7rem" y="-15"/></>,
                                name: 'Child One'
                            },
                        ],
                    },
                    {
                        label: <><text dx="2">JSX</text><rect height="18" width="7rem" y="-15"/></>,
                        name: 'Child One'
                    },
                ],
                name: 'Parent'
            }}
            direction={"rtl"}
            height={400}
            labelProp="label"
            width={600}
        />
    </div>);
}

export default App;
