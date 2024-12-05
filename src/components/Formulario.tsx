import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  nombre: string;
  edad: number;
}

export const Formulario = () => {

  const { formulario, nombre, email, handleChange } = useForm<FormData>({
    email: 'yairr47@gmail.com',
    nombre: 'Yair Ramirez',
    edad: 28
  });

  return (
    <form>
      <div className="mb-3">
        <label className="mb-3">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={ email }
          onChange={ handleChange }
        />
      </div>
      <div className="mb-3">
        <label className="mb-3">Nombre</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={ nombre }
          onChange={ handleChange }
        />
      </div>

      <pre>{ JSON.stringify( formulario ) }</pre>
    </form>
  )
}
