import { Model, Table, Column, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({
  tableName: 'administrators',
  timestamps: true,
  paranoid: false,
})
export class AdministratorModel extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  user_id: string;

  @Column
  user_name: string;

  @Column
  user_link: string;

  @Column(DataType.JSON)
  extra: JSON;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}

export default AdministratorModel;
