import UploadIcon from '@/components/UploadIcon'
import DemoSection from '@/components/DemoSection'
import Image from 'next/image'
import PageHeaders from '@/components/PageHeaders'

export default function Home() {
  return (
    <>
      <PageHeaders 
        h1Text={'Add epic captions to your videos'}
        h2Text={'Just upload your video and we will do the rest'}
      />
      <div className="text-center">
        <label className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50">
          <UploadIcon />
          <span>Choose file</span>
          <input type="file" />
        </label>
      </div>
      <DemoSection />
    </>
  )
}
