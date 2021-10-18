import React, { useEffect, useState } from 'react';
import { Checkbox, Card, Space, Button } from 'antd';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';


function HightlightJS() {
  const testjson = JSON.stringify({ a: 1, b: 2 });
  const testinit = '<div>131</div>';
  const [state, setstate] = useState(testjson);
  const [testhtml, settesthtml] = useState('aaa');

  const [arr, setarr] = useState([1, 2, 3]);

  const parse1 = () => {
    setarr((pre) => {
      pre.push(Math.random());
      return [...pre];
    });
  };
  const parse2 = () => {
    setstate((pre) => {
      let temp = JSON.parse(pre);
      temp[Math.random()] = Math.random();
    //   console.log(temp);
      return JSON.stringify({ ...temp });
    });
  };

  const parse = () => {
    // let h = transformHtmlToText(testinit, 'html');
    // console.log('h', h);
    settesthtml(h=>h+'ac|');
    // settesthtml((pre) => {
    //   console.log('pre', pre);
    //   return h;
    // });
  };
  useEffect(() => {
    parse();
  }, []);

  useEffect(() => {
    document.querySelectorAll('pre').forEach((block) => {
      try {
        hljs.highlightBlock(block);
      } catch (e) {
        console.log(e);
      }
    });
  },[state, testhtml]);

  const transformHtmlToText = (code, lang) => {
    code = lang === 'html' ? code.replace(/</g, '&lt;').replace(/>/g, '&gt;') : code;
    return code;
  };
  return (
    <div >
      <Space>
        <Button type="primary" onClick={parse1}>
          parse1
        </Button>
        <Button type="primary" onClick={parse}>
          parse
        </Button>
        <Button type="primary" onClick={parse2}>
          parse2
        </Button>
      </Space>
      <div>
        <pre className="language-jsx">
          <code>
            import React, {'\u007b'} Component {'\u007d'} from 'react'; {'\n'}
            import hljs from 'highlight.js';{'\n'}
            import 'highlight.js/styles/default.css'; 
          </code>
        </pre>
      </div>
      <div>
        <pre className="language-json">
          <code> {state} </code>
        </pre>
      </div>
      <div>
        <pre className="language-html">
          <code> {testhtml} </code>
        </pre>
      </div>
      <Child code={testhtml}></Child>
      <div> {testhtml} </div>
      <div>{state}</div>
      {arr.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}

export default HightlightJS;

function Child(props) {
    console.log(props);
    const [state, setstate] = useState('')
    useEffect(() => {
        setstate(props.code)
    })
  return (
    <div>
        {state}
      <pre className="language-html">
        <code> {state||'aaa'} </code>
      </pre>
    </div>
  );
}
