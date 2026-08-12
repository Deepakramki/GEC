import React, { useState } from 'react';
import { VIDEO_SERIES } from '../data';
import { X, Play, Clock, CheckCircle2, ChevronRight, Share2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [activeVideo, setActiveVideo] = useState(VIDEO_SERIES[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <span className=" text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                TOKENIZED MEDIA // ACADEMY
              </span>
            </div>
            <h3 className=" font-extrabold text-2xl text-slate-900 uppercase">
              INVESTMENT VIDEO SERIES
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center group shadow-inner">
          <img
            src={activeVideo.thumbnail}
            alt={activeVideo.title}
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

          {!isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              className="relative z-10 w-16 h-16 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
            >
              <Play className="w-7 h-7 fill-slate-900 ml-1" />
            </button>
          ) : (
            <div className="relative z-10 p-6 text-center text-white space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                ✓
              </div>
              <h4 className=" font-bold text-lg">{activeVideo.title}</h4>
              <p className="text-xs text-slate-300  max-w-md mx-auto">
                Streaming HD encrypted feed from Tokenized High-Frequency Analytics node...
              </p>
              <button
                onClick={() => setIsPlaying(false)}
                className="text-xs text-sky-300 underline cursor-pointer"
              >
                Pause Video
              </button>
            </div>
          )}

          {/* Duration Badge */}
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 bg-slate-900/90 text-white px-3 py-1.5 rounded-lg text-xs  font-medium backdrop-blur-md">
            <Clock className="w-3.5 h-3.5 text-sky-400" />
            <span>{activeVideo.duration}</span>
          </div>
        </div>

        {/* Episode Selector */}
        <div>
          <h4 className=" font-bold text-xs text-slate-500 uppercase tracking-wider mb-3">
            PLAYLIST EPISODES
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {VIDEO_SERIES.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveVideo(item);
                  setIsPlaying(false);
                }}
                className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                  activeVideo.id === item.id
                    ? 'border-slate-900 bg-slate-900 text-white shadow-md'
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                }`}
              >
                <div>
                  <span className={`text-[10px]  font-bold block ${activeVideo.id === item.id ? 'text-sky-300' : 'text-slate-500'}`}>
                    {item.duration}
                  </span>
                  <p className=" font-bold text-xs mt-1 leading-snug line-clamp-2">
                    {item.title}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[10px]  uppercase">
                  <span>SELECT</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
