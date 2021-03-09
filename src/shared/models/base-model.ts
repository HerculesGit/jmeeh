
/**
 * Por enquanto, deixar opcional os 'Ats'
 * 
 */
export interface BaseModel {
  id: number;
  createdAt?: Date
  updateAt?: Date
  isDeleted?: boolean
}