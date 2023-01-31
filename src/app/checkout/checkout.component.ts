import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  list_of_services;
  pkg_price;
  tax;
  package_name;
  package_description;
  choose_correct_billing_option = false;
  Add_ons = false;
  listOfSelectedAddOns = [];
  total_price_without_tax;
  AddOns_list;
  showInvoice = false;
  bill_method = {
    name: "",
    account_number: ""
  }

  constructor(private route: ActivatedRoute, public homeService: HomeService) { }

  ngOnInit(): void {
    this.scrollToTop()
  }
  scrollToTop() {
    window.scrollTo(0, 0);
    this.buyNow();
  }
  buyNow() {
    let all_packages = this.homeService.listOfPackages;
    for (let pkg of all_packages) {
      let SeclectedPackageId = this.route.snapshot.paramMap.get('id')
      if (pkg.id == parseInt(SeclectedPackageId)) {
        this.package_name = pkg.name;
        this.package_description = pkg.description;
        this.list_of_services = pkg.services;
        this.pkg_price = pkg.price;
        this.total_price_without_tax = this.pkg_price;
        this.AddOns_list = pkg.AddOns;
        this.calculateTax();
      }
    }
  }
  billOption(e) {
    if (e.target.value != 0) {
      let selected_option = e.target.value;
      this.bill_method.name = e.target.value;
      this.bill_method.account_number = this.homeService.Account_detail[selected_option];
      this.choose_correct_billing_option = true;
    }
    else {
      this.choose_correct_billing_option = false;
    }
  }
  updateCart(id, btn) {
    btn.disabled = true;
    this.Add_ons = true;
    for (let item of this.AddOns_list) {
      if (item.id == id) {
        this.listOfSelectedAddOns.push(item);
        this.total_price_without_tax += item.price;
        this.calculateTax();
      }
    }
  }
  calculateTax() {
    this.tax = this.total_price_without_tax * 0.05;
  }
  removeAddOns(index, btn, id) {
    this.listOfSelectedAddOns.splice(index, 1);
    for (let item of this.AddOns_list) {
      if (item.id == id) {
        this.total_price_without_tax -= item.price;
        this.calculateTax();
      }
    }
    let button = document.getElementById(btn) as HTMLButtonElement;
    button.disabled = false;
  }
  Invoice() {
    this.showInvoice = true;
  }
  Date() {
    let date = new Date();
    let currentDate = date.getDate();
    let currentMonth = date.getMonth() + 1; //As January is 0.
    let currentYear = date.getFullYear();
    return currentDate + "/" + currentMonth + "/" + currentYear;
  }
}