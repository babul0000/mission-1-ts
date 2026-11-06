abstract class UIElement {
    constructor(protected id: string) {

    }
    abstract render(): string;
}

class Input extends UIElement {
    constructor(id: string, private type: string,  private placeholder: string) {
        super(id)
    }
    render() {
        return `<Input id="${this.id}" type="${this.type}" name="${this.id}" placeholder="${this.placeholder}" />`
    }

   
}

class Button extends UIElement {
    constructor(id: string, private lavel: string, ){
        super(id)
    }
    render() {
       
        
        return `<button id="${this.id}"> ${this.lavel}</button>`;
    }
}

class Form extends UIElement {
    private children: UIElement[] = [];
    appendChild(child: UIElement){
        this.children.push(child)
    }
    render() {
      const childrenHtml =  this.children.map((child) => child.render()).join("\n ")
        
        return `<style>
.custom-form {
    width: 100%; max-width: 500px; margin: 40px auto; padding: 32px;
    display: flex; flex-direction: column; gap: 20px;
    background: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.06);
    font-family: Arial, sans-serif; box-sizing: border-box;
}
.custom-form input, .custom-form textarea, .custom-form select {
    width: 100%; padding: 13px 15px; border: 1px solid #d1d5db;
    border-radius: 9px; background: #f9fafb; color: #111827;
    font-size: 15px; outline: none; transition: all 0.25s ease;
    box-sizing: border-box;
}
.custom-form input:focus, .custom-form textarea:focus, .custom-form select:focus {
    border-color: #6366f1; background: #ffffff;
    box-shadow: 0 0 0 4px rgba(99,102,241,0.12);
}
.custom-form button {
    width: 100%; padding: 14px; border: none; border-radius: 9px;
    background: linear-gradient(135deg,#6366f1,#4f46e5);
    color: #ffffff; font-size: 16px; font-weight: 600;
    cursor: pointer; transition: all 0.25s ease;
}
.custom-form button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(79,70,229,0.25);
}
.custom-form label {
    display: block; margin-bottom: 7px;
    color: #374151; font-size: 14px; font-weight: 600;
}
.custom-form textarea { min-height: 120px; resize: vertical; }
.custom-form input::placeholder, .custom-form textarea::placeholder { color: #9ca3af; }
@media (max-width: 600px) {
    .custom-form { margin: 20px auto; padding: 22px; border-radius: 12px; }
}
</style>
<form id="${this.id}" class="custom-form">
    ${childrenHtml}
</form>`;
    }
}
const formElement = new Form("login-form")
const emailInput = new Input("email", "email", "Enter Your email");
const passwordInput = new Input("email", "email", "Enter Your password");
const submitButton = new Button("submit-btn", "submit");


formElement.appendChild(emailInput);
formElement.appendChild(passwordInput);
formElement.appendChild(submitButton);
// console.log(emailInput.render());
// console.log(passwordInput.render());
// console.log(submitButton.render());

console.log(formElement.render());

const rootElement = document.getElementById("root")

if(rootElement) {
    rootElement.innerHTML=  formElement.render();
}