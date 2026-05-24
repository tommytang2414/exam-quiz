export type QuestionType = 'mcq' | 'hotspot' | 'dragdrop'

export interface HotspotBox {
  answer: string   // 'Yes', 'No', or arbitrary text like 'User3 only'
  explanation?: string
}

export interface HotspotQuestion {
  id: number
  topic?: number
  text: string
  questionType: 'hotspot'
  boxes: HotspotBox[]   // boxes[0] = Box 1, boxes[1] = Box 2, ...
  type: 'yesno' | 'text'
  explanation?: string
}

export interface DragDropItem {
  position: number   // correct position (1-indexed)
  text: string
}

export interface DragDropQuestion {
  id: number
  topic?: number
  text: string
  questionType: 'dragdrop'
  dragType: 'order' | 'select'
  items: DragDropItem[]   // correct answer in order
  explanation?: string
}