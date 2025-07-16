import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

interface FlowerItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const flowers: FlowerItem[] = [
  {
    id: 1,
    name: "Нежные розы",
    description: "Авторский букет из розовых роз с эвкалиптом",
    price: 3500,
    image: "/img/61ce61ed-b141-4a6d-b482-024f4a34569a.jpg",
    category: "Букеты"
  },
  {
    id: 2,
    name: "Белые пионы",
    description: "Элегантная композиция из белых пионов",
    price: 4200,
    image: "/img/ff41f19c-84c7-4554-ba47-4e1706f5cbfb.jpg",
    category: "Композиции"
  },
  {
    id: 3,
    name: "Весенний микс",
    description: "Яркий букет из тюльпанов и нарциссов",
    price: 2800,
    image: "/img/44be419c-397a-4d2a-82c5-c40d5df9e68c.jpg",
    category: "Сезонные"
  }
];

export default function Index() {
  const [cart, setCart] = useState<FlowerItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');

  const addToCart = (flower: FlowerItem) => {
    setCart([...cart, flower]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const categories = ['Все', 'Букеты', 'Композиции', 'Сезонные'];

  const filteredFlowers = selectedCategory === 'Все' 
    ? flowers 
    : flowers.filter(flower => flower.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Flower" size={32} className="text-primary" />
              <h1 className="text-2xl font-display font-bold text-gray-900">Bloom Studio</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors">Каталог</a>
              <a href="#cart" className="text-gray-700 hover:text-primary transition-colors">Корзина</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button variant="outline" className="relative">
              <Icon name="ShoppingCart" size={20} />
              {cart.length > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
            Авторские букеты<br />
            <span className="text-primary">с душой</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-body">
            Создаем уникальные композиции из свежих цветов. Доставляем в день заказа по всему городу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Заказать букет
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm animate-scale-in">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Flower2" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Свежие цветы</h3>
              <p className="text-gray-600 font-body">Только качественные цветы от проверенных поставщиков</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm animate-scale-in">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Авторский подход</h3>
              <p className="text-gray-600 font-body">Каждый букет создается с любовью и вниманием к деталям</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm animate-scale-in">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600 font-body">Доставляем в день заказа по всему городу</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12 text-gray-900">
            Наш каталог
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="font-body"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Flowers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFlowers.map((flower) => (
              <Card key={flower.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={flower.image} 
                    alt={flower.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-display text-xl">{flower.name}</CardTitle>
                      <CardDescription className="font-body mt-1">{flower.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="font-body">{flower.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-display font-bold text-primary">
                      {flower.price.toLocaleString()} ₽
                    </span>
                    <Button 
                      onClick={() => addToCart(flower)}
                      className="bg-primary hover:bg-primary/90 text-white"
                    >
                      <Icon name="Plus" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cart */}
      <section id="cart" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12 text-gray-900">
            Корзина
          </h2>
          
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="ShoppingCart" size={64} className="text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-500 font-body">Корзина пуста</p>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <div className="space-y-4 mb-8">
                {cart.map((item, index) => (
                  <Card key={`${item.id}-${index}`} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <h3 className="font-display font-semibold">{item.name}</h3>
                          <p className="text-sm text-gray-600 font-body">{item.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="font-display font-bold text-primary">
                          {item.price.toLocaleString()} ₽
                        </span>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Icon name="X" size={16} />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <Separator className="my-8" />
              
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Итого: {getTotalPrice().toLocaleString()} ₽
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Оформить заказ
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12 text-gray-900">
            Контакты
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Телефон</h3>
                  <p className="text-gray-600 font-body">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Email</h3>
                  <p className="text-gray-600 font-body">hello@bloomstudio.ru</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Адрес</h3>
                  <p className="text-gray-600 font-body">г. Москва, ул. Цветочная, 15</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Время работы</h3>
                  <p className="text-gray-600 font-body">Пн-Вс: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
            
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="font-display">Оставить заявку</CardTitle>
                <CardDescription className="font-body">
                  Мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-body text-gray-700 mb-2 block">Имя</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="text-sm font-body text-gray-700 mb-2 block">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="text-sm font-body text-gray-700 mb-2 block">Сообщение</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 h-24"
                    placeholder="Расскажите о желаемом букете..."
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Flower" size={24} className="text-primary" />
                <span className="text-xl font-display font-bold">Bloom Studio</span>
              </div>
              <p className="text-gray-400 font-body">
                Создаем красоту из цветов для особенных моментов вашей жизни
              </p>
            </div>
            <div>
              <h3 className="font-display font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400 font-body">
                <li>Букеты на заказ</li>
                <li>Свадебные композиции</li>
                <li>Корпоративные заказы</li>
                <li>Оформление мероприятий</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400 font-body">
                <p>+7 (495) 123-45-67</p>
                <p>hello@bloomstudio.ru</p>
                <p>г. Москва, ул. Цветочная, 15</p>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-gray-400 font-body">
            <p>&copy; 2024 Bloom Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}