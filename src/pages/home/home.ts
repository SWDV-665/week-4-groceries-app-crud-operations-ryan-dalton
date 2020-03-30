import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ItemSliding } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery List";
  items = [
    {
      name: "Toilet Paper",
      quantity: "100",
      blurb: "You don't want to run out of this.",
      image: "assets/imgs/tp.jpg"

    },
    {
      name: "Water Bottles",
      quantity: "200",
      blurb: "Great on a hot day.",
      image: "assets/imgs/bottle.jpg"

    },
    {
      name: "Tylenol",
      quantity: "10",
      blurb: "Keeps the fever down.",
      image: "assets/imgs/medicine.jpg"

    }
  ]


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  removeItem(item, index){
    console.log("Removing Item: ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + item.name,
      duration: 3000
    });
    toast.present();
    this.items.splice(index, 1);
  }

  addItem(){
    console.log("Adding new item")
    this.showAddItemPrompt();

  }

  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Enter the name and quantity of the item you're adding",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
        {
          name: 'blurb',
          placeholder: 'Notes etc. (optional)'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancelled add item');
          }
        },
        {
          text: 'Add',
          handler: item => {
            console.log('Add clicked for', item);
            item.image = 'assets/imgs/customitem.jpg';
            this.items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }

  markDone(item){
    console.log('Marked bought for', item.name)
    item.image= 'assets/imgs/checkbox.jpg'
    const toast = this.toastCtrl.create({
      message: 'Marked complete - ' + item.name,
      duration: 3000
    });
    toast.present();
    
  }

  collapse(slidingItem: ItemSliding){
    slidingItem.close();
  }

}

