import { useCart } from "../CartContext";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Minus, Plus, Trash2, Package, Truck, CreditCard, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function CheckoutPage() {
  const { cart, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const [step, setStep] = useState<'cart' | 'delivery' | 'payment'>('cart');
  const [deliveryInfo, setDeliveryInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: ''
  });

  const deliveryFee = 150;
  const total = getCartTotal();
  const grandTotal = total + (total > 0 ? deliveryFee : 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    setStep('delivery');
  };

  const handleDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!deliveryInfo.fullName || !deliveryInfo.email || !deliveryInfo.phone || !deliveryInfo.address) {
      toast.error("Please fill in all required fields");
      return;
    }
    setStep('payment');
  };

  const handlePaymentSubmit = () => {
    toast.success("Order placed successfully! We'll contact you soon.");
    clearCart();
    setStep('cart');
    setDeliveryInfo({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      notes: ''
    });
  };

  if (step === 'payment') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
          <button
            onClick={() => setStep('delivery')}
            className="text-amber-600 hover:text-amber-700 mb-6 flex items-center gap-2"
          >
            ← Back to Delivery
          </button>

          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-10 h-10 text-amber-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl mb-2">Payment</h2>
              <p className="text-gray-600">Review and complete your order</p>
            </div>

            {/* Order Summary */}
            <div className="mb-8 p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
              <h3 className="text-xl mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span>R{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>R{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="border-t-2 border-amber-200 pt-2 mt-2"></div>
                <div className="flex justify-between text-lg sm:text-xl">
                  <span>Total</span>
                  <span className="text-amber-600">R{grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="mb-8 p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-lg mb-3">Delivery Address</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {deliveryInfo.fullName}<br />
                {deliveryInfo.address}<br />
                {deliveryInfo.city} {deliveryInfo.postalCode}<br />
                {deliveryInfo.phone}<br />
                {deliveryInfo.email}
              </p>
            </div>

            {/* Payment Options */}
            <div className="mb-8">
              <h3 className="text-lg mb-4">Payment Method</h3>
              <div className="space-y-3">
                <div className="p-4 border-2 border-amber-500 rounded-2xl bg-amber-50">
                  <p className="text-sm sm:text-base">
                    <strong>Bank Transfer / EFT</strong><br />
                    We'll send you our banking details via email. Please use your order reference as payment reference.
                  </p>
                </div>
                <div className="p-4 border-2 border-gray-200 rounded-2xl">
                  <p className="text-sm sm:text-base">
                    <strong>Cash on Delivery</strong><br />
                    Pay when you receive your order (available in select areas)
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={handlePaymentSubmit}
              size="lg"
              className="w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'delivery') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
          <button
            onClick={() => setStep('cart')}
            className="text-amber-600 hover:text-amber-700 mb-6 flex items-center gap-2"
          >
            ← Back to Cart
          </button>

          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-10 h-10 text-amber-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl mb-2">Delivery Information</h2>
              <p className="text-gray-600">Where should we deliver your candles?</p>
            </div>

            <form onSubmit={handleDeliverySubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-base">Full Name *</Label>
                <Input
                  id="fullName"
                  value={deliveryInfo.fullName}
                  onChange={(e) => setDeliveryInfo({ ...deliveryInfo, fullName: e.target.value })}
                  className="mt-2 rounded-xl"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <Label htmlFor="email" className="text-base">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={deliveryInfo.email}
                    onChange={(e) => setDeliveryInfo({ ...deliveryInfo, email: e.target.value })}
                    className="mt-2 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={deliveryInfo.phone}
                    onChange={(e) => setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })}
                    className="mt-2 rounded-xl"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address" className="text-base">Street Address *</Label>
                <Input
                  id="address"
                  value={deliveryInfo.address}
                  onChange={(e) => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })}
                  className="mt-2 rounded-xl"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <Label htmlFor="city" className="text-base">City</Label>
                  <Input
                    id="city"
                    value={deliveryInfo.city}
                    onChange={(e) => setDeliveryInfo({ ...deliveryInfo, city: e.target.value })}
                    className="mt-2 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode" className="text-base">Postal Code</Label>
                  <Input
                    id="postalCode"
                    value={deliveryInfo.postalCode}
                    onChange={(e) => setDeliveryInfo({ ...deliveryInfo, postalCode: e.target.value })}
                    className="mt-2 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="notes" className="text-base">Delivery Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  value={deliveryInfo.notes}
                  onChange={(e) => setDeliveryInfo({ ...deliveryInfo, notes: e.target.value })}
                  className="mt-2 rounded-xl"
                  placeholder="Any special delivery instructions..."
                  rows={4}
                />
              </div>

              {/* Delivery Info */}
              <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
                <h3 className="text-lg mb-3 flex items-center gap-2">
                  <Package className="w-5 h-5 text-amber-600" />
                  Delivery Information
                </h3>
                <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Delivery fee: R{deliveryFee.toFixed(2)}</li>
                  <li>• Estimated delivery: 3-5 business days</li>
                  <li>• We deliver nationwide across South Africa</li>
                  <li>• You'll receive a tracking number via email</li>
                </ul>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
              >
                Continue to Payment
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Shopping Cart</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Review your items and proceed to checkout
            </p>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-12 h-12 text-amber-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Start adding some beautiful candles!</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl p-4 sm:p-6 shadow-lg flex flex-col sm:flex-row gap-4"
                  >
                    <div className="w-full sm:w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl mb-1">{item.name}</h3>
                      <p className="text-sm sm:text-base text-amber-600 mb-2">{item.scent}</p>
                      <p className="text-base sm:text-lg text-gray-600 mb-3">R{item.price.toFixed(2)}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="rounded-full w-8 h-8 sm:w-10 sm:h-10 p-0"
                          >
                            <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                          </Button>
                          <span className="text-base sm:text-lg w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="rounded-full w-8 h-8 sm:w-10 sm:h-10 p-0"
                          >
                            <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full"
                        >
                          <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Button>
                      </div>
                    </div>

                    <div className="text-right sm:self-center">
                      <p className="text-lg sm:text-xl text-amber-600">
                        R{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl sticky top-24">
                  <h2 className="text-2xl sm:text-3xl mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-base sm:text-lg">
                      <span>Subtotal</span>
                      <span>R{total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-base sm:text-lg">
                      <span>Delivery Fee</span>
                      <span>R{deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="border-t-2 border-gray-200 pt-4">
                      <div className="flex justify-between text-xl sm:text-2xl">
                        <span>Total</span>
                        <span className="text-amber-600">R{grandTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleCheckout}
                    size="lg"
                    className="w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 mb-4"
                  >
                    Proceed to Checkout
                  </Button>

                  <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
                    <p className="text-xs sm:text-sm text-gray-600 text-center">
                      🚚 Free delivery on orders over R1000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
