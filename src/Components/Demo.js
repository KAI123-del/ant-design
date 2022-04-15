import { Form, Button, Checkbox } from 'antd';


import '../index.css';


const Demo = () => {
  

  async function onFinish(values) {



    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.Email,
        password: values.password
      })
    })
    const data = await response.json();
    if(response.status===400){
      alert(data.error)
    }
    if(response.status===200){
      alert(`your generated token is :${data.token}`)
    }


  };




  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    
    <Form
      className='lg:px-24 px-6'
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item

        name="Email"
        value=""



      >
        <input className='border outline-none rounded mb-4 h-12 w-full px-4' placeholder='Email Address*' ></input>
      </Form.Item>

      <Form.Item

        name="password"
        value=""

        className=''
      >
        <input className='h-12 w-full mb-4 border rounded outline-none px-4 ' placeholder='Password*'></input>
      </Form.Item>



      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" className='w-full mb-2 tracking-wide border font-bold bg-cyan-900 rounded text-white font-Inter h-12' >
          Login
        </Button>
      </Form.Item>
      <Form.Item
        className=''
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <div className='flex justify-between items-center  '>
          <Checkbox className=' font-Inter lg:text-lg lg:font-semibold text-xs'>  Remember Password</Checkbox>
          <div className='font-Inter lg:text-lg lg:font-semibold text-xs'>Forget Password?</div>
        </div>
      </Form.Item>
    </Form>
    
  );
  
};

export default Demo;