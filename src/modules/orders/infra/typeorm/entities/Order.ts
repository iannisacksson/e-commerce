import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';

@Entity()
class Order {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToMany(() => Customer, customer => customer.id)
  customer: Customer;

  @OneToOne(() => OrdersProducts, ordersProducts => ordersProducts.order)
  @JoinColumn()
  order_products: OrdersProducts[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Order;
