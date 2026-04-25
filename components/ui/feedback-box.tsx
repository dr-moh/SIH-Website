"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle2, MessageSquarePlus } from "lucide-react"

export function FeedbackBox() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Replace with actual API/Backend call
    await new Promise((resolve) => setTimeout(resolve, 1500)) 
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="w-full max-w-5xl mx-auto mt-24 mb-12 px-4">
      <div className="bg-card border border-border/60 rounded-2xl shadow-sm overflow-hidden relative">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-5 gap-8 p-8 md:p-12"
            >
              {/* Left Column: Text & Context */}
              <div className="md:col-span-2 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground flex items-center gap-2">
                  <MessageSquarePlus className="w-6 h-6 text-primary" />
                  Help Us Improve
                </h3>
                <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                  We are always evolving. Share your feedback, feature requests, or content ideas to help us build a better platform for you.
                </p>
              </div>

              {/* Right Column: Form Elements */}
              <div className="md:col-span-3">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name or Specialty (Optional)"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us what you love, what's missing, or how we can make the hub better..."
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto self-end bg-primary text-primary-foreground font-medium text-sm px-8 py-3 rounded-xl flex items-center justify-center gap-2 transition-all hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
                        className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                    ) : (
                      <>
                        Send Feedback <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-16 flex flex-col items-center justify-center text-center gap-4 min-h-[300px]"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
              >
                <CheckCircle2 className="w-16 h-16 text-primary" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground tracking-tight">Thank you, Doctor!</h3>
                <p className="text-base text-muted-foreground mt-2 max-w-[300px] mx-auto">
                  Your insight helps us shape the future of surgical education.
                </p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              >
                Submit another response
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
