import { useState } from 'react';
import axios from "axios";
import { useTranslation } from 'react-i18next'


function register() {
  const {t} = useTranslation(['login'])
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = e.currentTarget.userid.value;
    const email = e.currentTarget.email.value;
    const pw = e.currentTarget.password.value;
    if(!(id&&email&&pw)) {
      alert('Please enter your information!')  
      return;
    }
    fetch(`/api/regist`, {
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        id,
        email,
        pw
      })
    }).then(async response =>{
      let res = await response.json()
      console.log(res)
      window.location.href = '/login'
    })
  }
  return (
    <div className='registerWarp'>
      
      <form onSubmit={handleSubmit}>
        <div className='registerbox'>
          <div className='registerboxinner'>
            <div className='register_first_component_etc'>
              <h1>{t('login:Signup')}</h1>
            </div>
            <div className='register_inputfield'>
              <div className='register_first_component'>
                <div className='register_second_component'>
                  <label>
                  {t('login:ID')} 
                  </label>
                </div>
                <input type="text" name="userid" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className='register_first_component'>
                <div className='register_second_component'>
                  <label>
                  {t('login:Email')}
                  </label>
                </div>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='register_first_component'>
                <div className='register_second_component'>
                  <label>
                  {t('login:PW')}
                  </label>
                </div>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className='register_first_component_etc'>
              <button type="submit">{t('login:Signup')}</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default register;
