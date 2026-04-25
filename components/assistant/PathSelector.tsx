'use client'

import { motion } from 'framer-motion'
import { 
  FileText, MapPin, CheckSquare, 
  BarChart2, HelpCircle, ArrowRight 
} from 'lucide-react'

interface Path {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  totalSteps: number
}

interface PathSelectorProps {
  countryName: string
  onSelectPath: (path: Path) => void
}

const PATHS = [
  {
    id: 'registration',
    title: 'Voter registration',
    description: 'How to register and who can vote',
    icon: <FileText size={20} />,
    totalSteps: 5
  },
  {
    id: 'process',
    title: 'Election process',
    description: 'How the full election works step by step',
    icon: <BarChart2 size={20} />,
    totalSteps: 6
  },
  {
    id: 'voting-day',
    title: 'Voting day',
    description: 'What happens when you go to vote',
    icon: <CheckSquare size={20} />,
    totalSteps: 4
  },
  {
    id: 'counting',
    title: 'Vote counting',
    description: 'How votes are counted and results declared',
    icon: <MapPin size={20} />,
    totalSteps: 4
  },
  {
    id: 'custom',
    title: 'Ask your own question',
    description: 'Type anything about elections in your country',
    icon: <HelpCircle size={20} />,
    totalSteps: 0
  }
]

export default function PathSelector({ 
  countryName, onSelectPath 
}: PathSelectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
    >
      <div style={{ marginBottom: '24px', textAlign: 'center' }}>
        <div style={{
          display: 'inline-block',
          fontSize: '32px',
          marginBottom: '12px'
        }}>
          {/* country flag from localStorage */}
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(22px, 4vw, 32px)',
          color: 'var(--text-primary)',
          marginBottom: '8px'
        }}>
          Elections in {countryName}
        </h2>
        <p style={{
          fontSize: '15px',
          color: 'var(--text-secondary)',
          lineHeight: 1.6
        }}>
          What would you like to understand?
        </p>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        {PATHS.map((path, i) => (
          <motion.button
            key={path.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: i * 0.08,
              type: 'spring',
              stiffness: 80 
            }}
            whileHover={{ x: 4, borderColor: 'var(--accent)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectPath(path)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px 20px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '14px',
              cursor: 'pointer',
              textAlign: 'left',
              width: '100%',
              transition: 'border-color 0.2s ease'
            }}
          >
            <div style={{
              width: '40px', height: '40px',
              borderRadius: '10px',
              background: 'var(--surface-2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent)',
              flexShrink: 0
            }}>
              {path.icon}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{
                fontSize: '15px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                margin: 0,
                marginBottom: '2px'
              }}>
                {path.title}
              </p>
              <p style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                {path.description}
              </p>
            </div>
            <ArrowRight 
              size={16} 
              color="var(--text-muted)" 
              style={{ flexShrink: 0 }} 
            />
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
