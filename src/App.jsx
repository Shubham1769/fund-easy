import { useState , useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MakeNewWill from './components/MakeNewWill'
import MyWill from './components/MyWill'
import Header from './components/Header'
import Footer from './components/Footer'
import {ethers} from 'ethers'
import Home from './components/Home'
import MyWillAbi from "./artifacts/contracts/MyWill.sol/MyWill.json"
  function App() {
    const [accountAddress, SetaccountAddress] = useState();
  const [Provider, setProvider] = useState();
  const [Signer, setSigner] = useState();
  const [ContractAddress, setContractAddress] = useState();
  const [address, setAddress] = useState();
  const [Contract, setContract] = useState();
  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
    const contract = new ethers.Contract(
      contractAddress,
      MyWillAbi.abi,
      provider
    );
    const signer = provider.getSigner();
    const signerAccount = contract.connect(signer);
    const accountAddress = await signer.getAddress();
    setAddress(accountAddress)
    console.log(accountAddress);
    setContract(contract);
    SetaccountAddress(accountAddress);
    setProvider(provider);
    setSigner(signerAccount);
    setContractAddress(contractAddress);
  };
  useEffect(() => {
    connectWallet();
  }, []);
  return (
    <>
    <Header/>
    <Home/>
      <MyWill Signer={Signer} address={address} />
      <MakeNewWill Signer={Signer} />
      <Footer/>
      </>
  )
}

export default App
