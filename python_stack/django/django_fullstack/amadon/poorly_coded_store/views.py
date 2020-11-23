from django.shortcuts import render,redirect
from .models import Order, Product
from django.db.models import Sum

def index(request):
    context = {
        "all_products": Product.objects.all()
    }
    return render(request, "store/index.html", context)

def checkout(request):
    quantity_from_form = int(request.POST["quantity"])
    # price_from_form = float(request.POST["price"])
    price = Product.objects.get(id=request.POST["product_id"]).price
    total_charge = quantity_from_form * price
    print("Charging credit card...")
    order = Order.objects.create(quantity_ordered=quantity_from_form, total_price=total_charge)
    request.session['last_order_total'] = float(order.total_price)
    return redirect('/processed')

def processed(request):
    total_sum = Order.objects.aggregate(sum=Sum('total_price'))
    total_items = Order.objects.aggregate(sum=Sum('quantity_ordered'))
    context = {
        "all_orders_items": total_items['sum'],
        "last_order_total": request.session['last_order_total'],
        "total_sum": float(total_sum['sum'])
    }
    return render(request, "store/checkout.html", context)