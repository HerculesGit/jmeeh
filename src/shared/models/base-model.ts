
/**
 * Por enquanto, deixar opcional os 'Ats'
 * 
 */
export interface BaseModel {
  id: any;
  createdAt?: Date
  updateAt?: Date
  isDeleted?: boolean
}