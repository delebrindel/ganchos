import { useInput } from "../hooks/use-input"

export const Formulario = ()=>{

  const {props: propsNombre} = useInput({min: 3, max: 10});
  const {props: propsApellido} = useInput({min: 3, max: 10});
  const {props: propsEmail} = useInput({min: 3, max: 20, isEmail: true});

  const hayError = (propsNombre.errors.length > 0 || propsApellido.errors.length > 0 || propsEmail.errors.length > 0) || (propsNombre.value.trim() === '' || propsApellido.value.trim() === '' || propsEmail.value.trim() === '');

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    console.log("Enviando");
  }

  return(
    <form action="#" onSubmit={onSubmitHandler}>
      <h1>Formulario</h1>
      <label htmlFor="nombre">Nombre</label><br/>
      <input name="nombre" value={propsNombre.value} onChange={propsNombre.change} /><br />
      {propsNombre.errors && propsNombre.errors.map((item, iter) => <p key={iter}>{item}</p>)}
      <label htmlFor="apellido">Apellido</label><br/>
      <input name="apellido" value={propsApellido.value} onChange={propsApellido.change} /><br/>
      {propsApellido.errors && propsApellido.errors.map((item, iter) => <p key={iter}>{item}</p>)}
      <label htmlFor="email">Email</label><br/>
      <input name="email" value={propsEmail.value} onChange={propsEmail.change} /><br/>
      {propsEmail.errors && propsEmail.errors.map((item, iter) => <p key={iter}>{item}</p>)}
      <input type="submit" disabled={hayError} />
    </form>
  )
}