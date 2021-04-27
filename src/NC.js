import React from "react";

class NC extends React.Component {
// constructor a besoin de props
  constructor(props) {
    super(props)
    this.state = { typeprojet:[], 
      nom: '', 
      prenom: '',
      email: '',
      ville: '',
      cp: '',
      tprojet: '',
      descriptionp: '',
      budget: '',
    } // definir un attribut state
  }

  componentDidMount() { // Hook c'est une fonction appelé automatiquement, componentDidMount est appelé dés que le composant est chargé
    // Simple GET request using fetch
    fetch('http://api.projet-anice.tk/typeprojet/list')
        .then(response => response.json())
        .then(data => this.setState({
          typeprojet:data
        }));
}
  changementformulaire = (evenement) => {
    const valeur=evenement.nativeEvent.target.value;
    const nomchamp=evenement.nativeEvent.target.name;
    this.setState({
      [nomchamp] : valeur
    });
  }

  soumettreformulaire = (evenement) => {
    evenement.preventDefault();
    const option= {
      method : "PUT",
      headers : { 'Content-Type': 'application/json' },
      body : JSON.stringify(this.state)
    };
    fetch('http://api.projet-anice.tk/client/add', option)
    .then(response => response.json())
    .then(data => console.log(data));
  }
  render() {
    const types = [];
    for (const element of this.state.typeprojet) {
      types.push(<option value={element.id}> {element.nom} </option>)
    }
    return(
    <div class="container">
      
      <form onSubmit= { this.soumettreformulaire } method="post">

  <div class="field">
    <label class="label">Nom</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-success" type="text" placeholder="Dupont" onChange= { this.changementformulaire } name= "nom" required/>
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
  </div>

  <div class="field">
    <label class="label">Prenom</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-success" type="text" placeholder="Jean" onChange= { this.changementformulaire } name= "prenom" required/>
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
  </div>


  <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-danger" type="email" placeholder="Nayence@agency.com" onChange= { this.changementformulaire } name= "email" required/>
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle"></i>
      </span>
    </div>
  </div>

  <div class="field">
    <label class="label">Ville</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-success" type="text" placeholder="Paris" onChange= { this.changementformulaire } name= "ville" required/>
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
  </div>

  <div class="field">
    <label class="label">Code Postale</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-success" type="text" placeholder="75001" onChange= { this.changementformulaire } name= "cp" required/>
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
  </div>

  <div class="field">
    <label class="label">Budget</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-success" type="text" placeholder="7000$" onChange= { this.changementformulaire } name= "budget" required/>
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
  </div>


    <div class="field">
          <label class="label">Votre Support</label>
          <div class="control">
            <div class="select">
              <select onChange= { this.changementformulaire } name= "tprojet" required>
                { types }
              </select>
            </div>
          </div>
        </div>

      <div class="field">
        <label class="label">Votre projet</label>
        <div class="control">
          <textarea class="textarea" placeholder="Nous souhaiterions..." onChange= { this.changementformulaire } name= "descriptionp" required></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <p class="control">
          <button type="submit" class="button is-primary">
            Submit
          </button>
        </p>
        <p class="control">
          <a class="button is-light">
          Cancel
          </a>
        </p>
      </div>
      </form>
  </div>
    );
  }
}

export default NC;